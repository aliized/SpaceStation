import { Link } from "react-router-dom";

const BlogCard = ({ title, text, photo }) => {
  return (
    <Link to="blog" className="flex-1">
      
      <div className="flex flex-col border-solid items-center text-center p-2">
        <img src={photo} alt={title} className="mb-6 w-full" />
        <div className="xl:w-3/4 flex flex-col gap-4 pb-4">
          <h3 className="text-xl font-bold ">{title}</h3>
          <p className="font-light text-gray-700 line-clamp-3">{text}</p>
        </div>
      </div>
      
    </Link>
  );
};

export default BlogCard;
