import { Link } from "react-router-dom";

import { SERVER_URL } from "config";
import MainFrame from "components/containers/MainFrame";

const PostBox = ({ postTitle, photo, content, postId }) => {
  return (
    <MainFrame bgColor={"bg-white"}>
      <div className="flex flex-col max-w-5xl gap-8 px-2 mx-auto sm:px-6">
        <h4 className="mx-auto text-3xl font-bold lg:mb-3">{postTitle}</h4>
        <div className="w-full">
          <img
            className="object-cover w-full rounded-3xl aspect-video"
            src={`${SERVER_URL}/img/blog/${photo}`}
            alt={`تصویر فیلم ${postTitle}`}
          />
        </div>
        <p className="lineWrap">  {content}...</p>
        <div className="flex justify-end w-full">
          <Link
            to={`/post/${postId}/${postTitle}`}
            className="px-5 py-2 text-white bg-blue-700 rounded-full"
          >
            ادامه مطلب
          </Link>
        </div>
      </div>
    </MainFrame>
  );
};

export default PostBox;
