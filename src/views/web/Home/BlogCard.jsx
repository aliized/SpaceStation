const BlogCard = ({ title, text, photo }) => {
  return (
    <a href="link">
      <div className="flex flex-col border-solid  items-center text-center p-2">
        <img src={photo} alt={title} className="mb-6 w-full" />
        <div className="lg:w-2/3 flex flex-col gap-4 pb-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="font-bold text-gray-700">{text}</p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
