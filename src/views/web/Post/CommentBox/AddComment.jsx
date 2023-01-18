import { Formik, Form } from "formik";

import { commentSchema } from "validators/commentSchema";
import toast from "react-hot-toast";
// import { createComment } from "services/web/blog";
import { useContext } from "react";
import { BlogContext } from "context/BlogContext";

const AddComment = (postId) => {
  const { setOpenModal, loggedIn, token } = useContext(BlogContext);

  const handleAddComment = async (comment) => {
    console.log("clicked")
    console.log(comment);
    let addCommentToast = toast.loading("لطفا چند لحظه صبر کن");

    // try {
    //   //*sakhte objecte user
    //   user.fullName = user.email.substring(0, user.email.indexOf("@"));

    //   //*ertebat ba backend vase sakht
    //   const res = await createComment(token, comment);

    //   if (res.status !== 201) {
    //     toast.error("مشکلی در ساخت کاربر به وجود آمده!", {
    //       id: addCommentToast,
    //       duration: 4000,
    //     });
    //   }
    //   toast.success(`سلام ${user.fullName} عزیز، خوش آمدی!`, {
    //     id: addCommentToast,
    //     duration: 4000,
    //   });

    //   //*set token + states
    //   const { user: userInfo, token: userToken } = res.data;
    //   loginDataSet(userInfo, userToken);

    //   setOpenModal(false);
    // } catch (err) {
    //   if (err.response) {
    //     toast.error(err.response.data.message, {
    //       id: addCommentToast,
    //       duration: 3000,
    //     });
    //   } else {
    //     toast.dismiss(addCommentToast);
    //   }
    // }
  };

  return (
    <>
      {loggedIn ? (
        <div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={commentSchema}
            onSubmit={(values) => {
              handleAddComment(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-3 p-8 sm:mx-auto ">
                <textarea 
                className="border-2 border-red-300 outline-none rounded-md py-2 px-3"
                  label="آدرس ایمیل"
                  placeholder="متن نظر..."
                  name="body"
                  error={errors.body}
                  touched={touched.body}
                />

                <input
                  type="submit"
                  className="px-5 py-2 text-white bg-blue-700 rounded-full duration-75 cursor-pointer hover:bg-blue-800"
                  value="ثبت نظر"
                />
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <div>login first</div>
      )}
    </>
  );
};

export default AddComment;
