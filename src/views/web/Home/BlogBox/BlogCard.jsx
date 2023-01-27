import { SERVER_URL } from "config";
import { Link } from "react-router-dom";

const BlogCard = ({ postId, postTitle, text, photo }) => {
  return (
    <Link to={`/post/${postId}/${postTitle}`} className="flex-1">
      <div className="flex flex-col gap-6 border-solid items-center text-center p-2 ">
      <div className="w-full aspect-video rounded-3xl overflow-hidden">

        <img
          src={`${SERVER_URL}/img/blog/${photo}`}
          alt={`تصویر ${postTitle}`}
          className="h-full w-full object-cover"
        />
      </div>
        <div className="xl:w-3/4 flex flex-col gap-4 pb-4">
          <h3 className="text-xl  px-2 font-bold ">{postTitle}</h3>
          <p className="font-light text-gray-700 line-clamp-3">{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
