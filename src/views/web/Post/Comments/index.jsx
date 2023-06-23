import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { BlogContext } from "context/BlogContext";
import {
  createComment,
  deleteCommentApi,
  editCommentApi,
  getComments,
} from "services/web/blog";
import Swal from "sweetalert2";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentBox = ({ postId }) => {
  const { token, user, loggedIn, setOpenModal } = useContext(BlogContext);

  const [comments, setComments] = useState([]);
  const [numberOfComments, setNumberOfComments] = useState(0);
  const [, setCommentsLoading] = useState(false);
  const [activeComment, setActiveComment] = useState(null);

  // commentsLoading

  //*GET.................................................................................................
  useEffect(() => {
    (async () => {
      try {
        setCommentsLoading(true);
        //* Fetch Data
        const { data: commentsData } = await getComments(postId);
        console.log(commentsData);

        //* Set Data
        setComments(commentsData.comments);
        setNumberOfComments(commentsData.total);

        setCommentsLoading(false);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setComments({
            comments: [],
            total: 0,
          });
        }
        setCommentsLoading(false);
      }
    })();
  }, [postId]);

  const rootComments = comments.filter((comment) => comment.parent === null);

  const getReplies = (commentId) =>
    comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

  //*Create.................................................................................................

  const handleAddComment = async (comment, { resetForm }, replyId) => {
    let addCommentToast = toast.loading("لطفا چند لحظه صبر کن");

    try {
      //*sakhte objecte comment
      comment.post = postId;
      comment.parent = replyId;

      //*ertebat ba backend vase sakht
      const res = await createComment(token, comment);

      if (res.status !== 201) {
        toast.error("مشکلی در ارسال نظر شما به وجود آمده!", {
          id: addCommentToast,
          duration: 4000,
        });
      }

      //*setStates
      setNumberOfComments(numberOfComments + 1);
      setComments([res.data.comment, ...comments]);

      toast.success(
        `${user.fullName} جان از این که نظرتو باهامون به اشتراک گذاشتی ممنونیم`,
        {
          id: addCommentToast,
          duration: 4000,
        },
      );
      setActiveComment(null);
      resetForm();
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message, {
          id: addCommentToast,
          duration: 4000,
        });
      } else {
        toast.dismiss(addCommentToast);
      }
    }
  };

  //*UPDATE.................................................................................................

  const handleEditComment = async (comment, { resetForm }, parentId) => {
    let editCommentToast = toast.loading("لطفا چند لحظه صبر کن");

    try {
      //*sakhte objecte comment
      comment.id = parentId;

      //*ertebat ba backend vase sakht

      const res = await editCommentApi(token, comment);

      if (res.status !== 201) {
        toast.error("مشکلی در ویرایش نظر شما به وجود آمده!", {
          id: editCommentToast,
          duration: 4000,
        });
      }

      //*setStates
      const commentsArray = [...comments];
      const desiredItemIndex = commentsArray.findIndex(
        (cm) => cm.id === comment.id,
      );
      commentsArray[desiredItemIndex].message = comment.message;
      setComments(commentsArray);

      toast.success(`${user.fullName} جان نظرت با موفقیت ویرایش شد`, {
        id: editCommentToast,
        duration: 4000,
      });
      setActiveComment(null);
      resetForm();
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message, {
          id: editCommentToast,
          duration: 4000,
        });
      } else {
        toast.dismiss(editCommentToast);
      }
    }

    setActiveComment(null);
  };

  //*DELETE.................................................................................................

  const handleDeleteComment = async (commentId) => {
    const result = await Swal.fire({
      title:
        '<p class="font-anjoman font-bold text-xl">مطمئنی میخوای نظرتو حذف کنی؟</p>',
      html: '<p class="font-vazir">این کار قابل برگشت نیست</p>',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#9a9a9a",
      confirmButtonText: "بله، حذفش کن",
      cancelButtonText: "لغو",
      customClass: {
        confirmButton: "font-vazir text-xl ",
        cancelButton: "font-vazir text-xl  ",
      },
    });

    if (result.isConfirmed) {
      let deleteCommentToast = toast.loading("لطفا چند لحظه صبر کن");
      const res = await deleteCommentApi(token, commentId);
      if (res.status === 200) {
        const filtredComments = comments.filter(
          (comment) => comment.id !== commentId,
        );
        setComments(filtredComments);
        setNumberOfComments(numberOfComments - 1);

        toast.success(`${user.fullName} جان نظرت با موفقیت حذف شد`, {
          id: deleteCommentToast,
          duration: 4000,
        });
      } else {
        toast.error(`مشکلی در حذف نظر شما پیش آمده`, {
          id: deleteCommentToast,
          duration: 4000,
        });
      }
    }
  };

  return (
    <>
      <label
        htmlFor="message"
        className="text-right text-sm px-3 py-2 focus:outline-none"
      >
        {numberOfComments ? (
          `${numberOfComments} نظر برای این مطلب ثبت شده. نظر تو چیه؟`
        ) : (
          <p>&#127762; اولین نفری باش که نظرتو بهمون میگی </p>
        )}
      </label>

      {loggedIn ? (
        <CommentForm
          postId={postId}
          setComments={setComments}
          handleSubmit={handleAddComment}
          submitLabel="ثبت نظر"
          // hasCancelButton
          // handleCancel={}
        />
      ) : (
        <div className=" py-3 md:py-5 flex gap-3 flex-col text-sm items-center ">
          <p>لطفا برای ثبت نظر وارد حساب کاربریت شو یا ثبت‌نام کن</p>

          <button
            className="bg-blue-500 hover:bg-blue-600 duration-100 rounded-full py-2 px-3 text-white"
            type="button"
            onClick={() => setOpenModal(true)}
            name="loginButton"
          >
            ورود / ثبت نام
          </button>
        </div>
      )}

      {/* <CommentsList comments={comments} /> */}

      {rootComments.map((rootComment) => (
        <Comment
          key={rootComment.id}
          comment={rootComment}
          replies={getReplies(rootComment.id)}
          currentUserId={user._id}
          activeComment={activeComment}
          setActiveComment={setActiveComment}
          handleAddComment={handleAddComment}
          handleEditComment={handleEditComment}
          handleDeleteComment={handleDeleteComment}
        />
      ))}
    </>
  );
};

export default CommentBox;
