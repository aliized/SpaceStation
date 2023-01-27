import BlogCard from "./BlogCard";

import MainFrame from "components/containers/MainFrame";
import { useContext } from "react";
import { BlogContext } from "context/BlogContext";
import MultiRenderer from "components/MultiRenderer";
import LoadingBlogCard from "components/Loading/home/LoadingBlogCard";

const BlogBox = () => {
  const { blogIndex, loading } = useContext(BlogContext);
  return (
    <MainFrame bgColor={"bg-white"}>
      <div className="text-3xl lg:text-4xl font-bold font-anjoman flex justify-center mb-14">
        <p>اخبار روز علم نجوم در جهان</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-around gap-3 lg:gap-5 mb-5 ">
      
        {!loading && blogIndex.length
          ? blogIndex
              .slice(0, 3)
              .map((post) => (
                <BlogCard
                  key={post._id}
                  postId={post._id}
                  postTitle={post.title}
                  text={post.body}
                  photo={post.thumbnail}
                />
              ))
          : <MultiRenderer times={3}>
            <LoadingBlogCard/>
          </MultiRenderer>}
      </div>
    </MainFrame>
  );
};

export default BlogBox;
