import React from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const CommentBox = (postId) => {
  return (
    <div>
      <AddComment postId={postId} />
      <CommentsList postId={postId}/>
    </div>
  );
};

export default CommentBox;
