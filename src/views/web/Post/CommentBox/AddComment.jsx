import { Formik, Form, Field, ErrorMessage } from "formik";

import { commentSchema } from "validators/commentSchema";
import toast from "react-hot-toast";
// import { createComment } from "services/web/blog";
import { useContext } from "react";
import { BlogContext } from "context/BlogContext";
import { createComment } from "services/web/blog";

const AddComment = ({ postId, setComments, total }) => {
  const { loggedIn, token, user } = useContext(BlogContext);

  const handleAddComment = async (comment, { resetForm }) => {
    let addCommentToast = toast.loading("لطفا چند لحظه صبر کن");

    try {
      //*sakhte objecte comment
      comment.post = postId;

      //*ertebat ba backend vase sakht
      const res = await createComment(token, comment);

      if (res.status !== 201) {
        toast.error("مشکلی در ارسال نظر شما به وجود آمده!", {
          id: addCommentToast,
          duration: 4000,
        });
      }

      toast.success(
        `${user.fullName} جان از این که نظرتو باهامون به اشتراک گذاشتی ممنونیم`,
        {
          id: addCommentToast,
          duration: 4000,
        }
      );

      //*set states
      // const commentsList = [...comments];
      // commentsList.push(comment)
      // setComments(commentsList);
      resetForm();
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message, {
          id: addCommentToast,
          duration: 3000,
        });
      } else {
        toast.dismiss(addCommentToast);
      }
    }
  };

  return (
    <>
      {loggedIn ? (
        <Formik
          initialValues={{
            message: "",
          }}
          validationSchema={commentSchema}
          onSubmit={(values ,{resetForm}) => {
            handleAddComment(values,{resetForm});
          }}
        >
          {({ errors }) => (
            <>
              <label htmlFor="message" className="text-right text-sm px-3 py-2">
                {total ? `${total} نظر برای این مطلب ثبت شده. نظر تو چیه؟` : (<p>&#127762; اولین نفری باش که نظرتو بهمون میگی </p>)}
              </label>

              <Form className="flex flex-col gap-1 w-full text-sm">
                <Field
                  id="message"
                  component="textarea"
                  rows="4"
                  placeholder="متن نظرت رو اینجا وارد کن"
                  name="message"
                  className="border-2 border-gray-300 outline-none rounded-md py-2 px-3 resize-none text-gray-700 w-full"
                />

                <div className="text-sm text-red-600 px-2 duration-150">
                  {errors.message ? (
                    <ErrorMessage component="span" name="message" />
                  ) : null}
                </div>
                <input
                  type="submit"
                  className="px-5 py-2 text-white bg-gray-400  rounded-full duration-100 cursor-pointer hover:bg-blue-600 inline-block w-28 "
                  value="ثبت نظر"
                />
              </Form>
            </>
          )}
        </Formik>
      ) : (
        <div>login first</div>
      )}
    </>
  );
};

export default AddComment;
