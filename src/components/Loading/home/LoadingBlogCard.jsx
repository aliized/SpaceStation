const LoadingBlogCard = () => {
  return (
    <div className="flex flex-col gap-6 items-center text-center p-2 ">
      <div className="w-full aspect-video rounded-3xl bg-gray-300 animate-pulse"></div>
      <div className=" xl:w-3/4 flex flex-col gap-3  pb-4 w-full rounded-full">
        <div className="animate-pulse w-1/2 rounded-full bg-gray-300 h-9 mx-auto"></div>
        <p className="animate-pulse rounded-full h-6 bg-gray-300 "></p>
        <p className="animate-pulse rounded-full w-full h-6 bg-gray-300 "></p>
        <p className="animate-pulse rounded-full w-1/2 h-6 bg-gray-300 "></p>
      </div>
    </div>
  );
};

export default LoadingBlogCard;
