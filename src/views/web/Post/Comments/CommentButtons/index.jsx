import { BiDislike, BiLike } from "react-icons/bi";

const CommentButtons = ({
  comment,
  canReply,
  canEdit,
  canDelete,
  setActiveComment,
  handleDeleteComment,
}) => {
  return (
    <div className="py-1 flex text-gray-500 gap-2 text-xs">

    
      {canReply && (
        <button
          type="button"
          onClick={() => setActiveComment({ id: comment.id, type: "reply" })}
        >
          پاسخ دادن
        </button>
      )}


      {canEdit && (
        <button
          type="button"
          onClick={() => setActiveComment({ id: comment.id, type: "edit" })}
        >
          ویرایش
        </button>
      )}


      {canDelete && (
        <button type="button" onClick={() => handleDeleteComment(comment.id)}>
          حذف
        </button>
      )}

      <button type="button" className="text-sm">
        <BiLike />
      </button>
      <button type="button" className="text-sm">
        <BiDislike />
      </button>
    </div>
  );
};

export default CommentButtons;
