import Comment from "./Comment";
const CommentsList = ({ comments }) => {
  return (
    <div className="py-10">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          message={comment.message}
          time={comment.time}
          user={comment.user}
        />
      ))}
    </div>
  );
};

export default CommentsList;
