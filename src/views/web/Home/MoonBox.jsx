import { useContext } from "react";
import { Link } from "react-router-dom";

import LoadingPost from "components/Loading/blog/LoadingPost";
import MainFrame from "components/containers/MainFrame";
import { SERVER_URL } from "config";
import { BlogContext } from "context/BlogContext";

const MoonBox = () => {
  const { loading, blog } = useContext(BlogContext);
  const post = blog[1];

  return (
    <MainFrame bgColor={"bg-black"}>
      {!loading && post ? (
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 p-4 lg:gap-14 lg:py-8">
          <div className="rounded-3xl aspect-video overflow-hidden w-full">
            <img
              src={`${SERVER_URL}/img/blog/${post.thumbnail}`}
              alt={`تصویر ${post.title}`}
              className=" h-full w-full object-cover"
            />
          </div>
          <h4 className="text-xl md:text-4xl font-anjoman">{post.title}</h4>
          <div className="leading-7  line-clamp-6 lg:line-clamp-none">{post.body}...</div>
          <div className="flex justify-end w-full">
            <Link
              to={`/post/${post._id}/${post.title}`}
              className="bg-blue-700 text-white py-2 px-5 rounded-full"
            >
              ادامه مطلب
            </Link>
          </div>
        </div>
      ) : (
        <LoadingPost bgColor={"black"} link={true} />
      )}
    </MainFrame>
  );
};

export default MoonBox;
