const LoadingBookBox = () => {
  return (
    <>
      <p className="bg-gray-300 h-9 w-64 rounded-full animate-pulse"></p>
      <div className=" flex flex-col-reverse lg:flex-row items-center lg:items-stretch w-full animate-pulse">
        <div className="flex-1 flex flex-col gap-4  py-5 lg:px-8 text-gray-700 justify-between w-3/4">
          <div className="flex flex-col gap-3 py-3">
            <p className="h-7 rounded-full w-full bg-gray-300"></p>
            <p className="h-7 rounded-full w-full bg-gray-300"></p>
            <p className="h-7 rounded-full w-full bg-gray-300"></p>
            <p className="h-7 rounded-full w-3/4 bg-gray-300"></p>
          </div>

          <div className="flex justify-end">
            <div className="h-10 w-32 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="rounded-3xl md:rounded-large max-w-sm md:mx-7 aspect-[3/4] w-2/3 sm:w-1/2 bg-gray-300 "></div>
      </div>
    </>
  );
};

export default LoadingBookBox;
