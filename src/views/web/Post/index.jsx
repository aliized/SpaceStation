import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { SERVER_URL } from "config";
import { BlogContext } from "context/BlogContext";
import { getPost } from "services/web/blog";

import MainFrame from "components/containers/MainFrame";
import Loading from "components/Loading";
import CommentBox from "./CommentBox";

const SinglePost = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({});

  const { postId } = useParams();
  const { setLoading, loading } = useContext(BlogContext);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        //* Fetch Data
        const { data: postData } = await getPost(postId);

        //* Set Data
        setPost(postData.post);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        if(err.response.status ===404){
          console.log("redirect")
          navigate('/notfound',)
        }
        setLoading(false);
      }
    };
    getData();
  }, [navigate, postId, setLoading]);
  return (
    
    <div className="my-8">
      {!loading && Object.keys(post).length ? (
        <MainFrame bgColor={"bg-white"}>
          <div className="flex flex-col max-w-5xl gap-8 px-2 mx-auto sm:px-6">
            <h4 className="mx-auto text-3xl md:text-4xl font-bold font-anjoman lg:mb-3">{post.title}</h4>
            <div className="w-full">
              <img
                className="object-cover w-full rounded-3xl aspect-video"
                src={`${SERVER_URL}/img/blog/${post.thumbnail}`}
                alt={`تصویر پست ${post.title}`}
              />
            </div>
            <p> {post.body}</p>
            <div className="flex flex-col w-full justify-center items-center border-solid border-t-2 border-b-2 p-4 gap-4">
              <p>COMMENT SECTION</p>
              <CommentBox/>
            </div>
          </div>
        </MainFrame>
      ) : (
        <Loading bgColor={"white"} />
      )}
    </div>
  );
};

export default SinglePost;
