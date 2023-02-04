import { useContext } from "react";

import LoadingPost from "components/Loading/blog/LoadingPost";
import MultiRenderer from "components/MultiRenderer";
import { BlogContext } from "context/BlogContext";

import PostBox from "./PostBox";

const Blog = () => {
  const { blogIndex, loading } = useContext(BlogContext);
  // console.log(blogIndex);
  // console.log(blogIndex.length);
  return (
    <>
      <div
        className="w-full mx-auto bg-bgHeader2  bg-no-repeat bg-cover
      bg-center h-[35vh] lg:h-[35vw] relative"
      >
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]"></div>
      </div>
      {/* <div className=" mx-auto bg-bgSpaceHotel  bg-no-repeat bg-cover h-[55vw]"></div> */}
      <div className="flex flex-col gap-10 py-8">
        {!loading && blogIndex.length ? (
          blogIndex.map((post) => (
            <PostBox
              key={post._id}
              postTitle={post.title}
              photo={post.thumbnail}
              content={post.body}
              postId={post._id}
            />
          ))
        ) : (
          <MultiRenderer times={3}>
            <LoadingPost bgColor={"white"} link={true} />
          </MultiRenderer>
        )}
      </div>
    </>
  );
};

export default Blog;
