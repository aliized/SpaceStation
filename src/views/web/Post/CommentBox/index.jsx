import { useEffect, useState } from "react";
import { getComments } from "services/web/blog";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const CommentBox = ({postId}) => {
  const [comments, setComments] = useState([]);

  const [commentsLoading, setCommentsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setCommentsLoading(true);
        //* Fetch Data
        // console.log(postId);
        const { data: commentsData } = await getComments(postId);

        //* Set Data
        console.log(commentsData);
        // setComments(commentsData);

        setCommentsLoading(false);
      } catch (err) {
        console.log(err.message);
        if (err.response && err.response.status === 404) {
          setComments({
            comments: [],
            total: 0,
          });
        }
        setCommentsLoading(false);
      }
    };
    getData();
  }, [postId, setCommentsLoading]);

  return (
    <>
      <AddComment postId={postId} setComments={setComments}/>
      <CommentsList postId={postId} />
    </>
  );
};

export default CommentBox;
