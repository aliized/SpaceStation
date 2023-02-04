import { SERVER_URL } from "config";
import { timeParser } from "utils";

import CommentButtons from "./CommentButtons";
import CommentForm from "./CommentForm";

const Comment = ({
  currentUserId,
  comment,
  replies,
  activeComment,
  setActiveComment,

  handleAddComment,
  handleDeleteComment,
  handleEditComment,
}) => {
  const { days, hours, mins } = timeParser(comment.time);
  let timePassed = "";
  if (days > 0) {
    timePassed = `${days} روز گذشته`;
  } else if (hours > 0) {
    timePassed = `${hours} ساعت گذشته`;
  } else if (mins > 0) {
    timePassed = `${mins} دقیقه گذشته`;
  } else {
    timePassed = "همین الان";
  }

  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "edit";

  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "reply";

  const lastChance = days === 0 && hours === 0 && mins < 30;

  return (
    <div
      className={` py-6  border-gray-200 flex  ${
        comment.parent ? "border-t mt-6 pb-0" : "border-b last:border-none"
      }`}
    >
      <div className="w-14">
        <img
          className="rounded-full overflow-hidden aspect-square w-12 h-12"
          src={`${SERVER_URL}/img/users/${comment.user.profilePic}`}
          alt={comment.user.fullname}
        />
      </div>

      <div className="w-0 flex-1">
        <div className="flex gap-1 items-center">
          <p className="font-bold">{comment.user.fullName}</p>
          <p className="text-xs text-gray-500">- {timePassed}</p>
        </div>

        <p className="text-sm font-light">{!isEditing && comment.message}</p>

        {isEditing && (
          <CommentForm
            submitLabel="ذخیره"
            hasCancelButton
            initialText={comment.message}
            handleSubmit={handleEditComment}
            handleCancel={() => {
              setActiveComment(null);
            }}
            parentId={comment.id}
          />
        )}

        <CommentButtons
          comment={comment}
          canReply={currentUserId ? true : false}
          canEdit={currentUserId === comment.user.id && lastChance}
          canDelete={
            lastChance &&
            currentUserId === comment.user.id &&
            replies.length === 0
          }
          setActiveComment={setActiveComment}
          handleDeleteComment={handleDeleteComment}
        />

        {isReplying && (
          <CommentForm
            submitLabel="ارسال"
            handleSubmit={handleAddComment}
            handleCancel={() => setActiveComment(null)}
            initialText={`@${comment.user.fullName} `}
            parentId={comment.parent ? comment.parent : comment.id}
          />
        )}

        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                handleEditComment={handleEditComment}
                handleDeleteComment={handleDeleteComment}
                handleAddComment={handleAddComment}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
