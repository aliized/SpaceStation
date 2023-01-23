import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "services/web/blog";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const CommentBox = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [numberOfComments, setNumberOfComments] = useState(0);
  const [commentsLoading, setCommentsLoading] = useState(false);

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
  return (
    <>
      <AddComment
        postId={postId}
        setComments={setComments}
        total={numberOfComments}
      />
      <CommentsList comments={comments} />
    </>
  );
};

export default CommentBox;
