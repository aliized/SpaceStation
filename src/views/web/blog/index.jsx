import { useContext } from "react";

import { BlogContext } from "context/BlogContext";

import PostBox from "./PostBox";
import Loading from "components/Loading";

const Movies = () => {
  const { blogIndex } = useContext(BlogContext);
  console.log(blogIndex);
  console.log(blogIndex.length);
  return (
    <>
      {/* <div className=" mx-auto bg-bgSpaceHotel  bg-no-repeat bg-cover h-[55vw]"></div> */}
      <div className="flex flex-col gap-10 py-16">
        {blogIndex.length ? (
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
          <Loading bgColor={"white"} link={true} />
        )}
      </div>
    </>
  );
};

export default Movies;
