import React from "react";

const LoadingMovieCard = () => {
  return (
    <div className="flex flex-col md:flex-row w-full lg:w-auto mx-auto max-w-5xl lg:items-center gap-5 lg:gap-10 animate-pulse">
      <div className=" w-2/3 mx-auto md:w-1/3  rounded-3xl overflow-hidden aspect-[3/4] relative  ">
        <div className="w-full h-full object-cover bg-gray-300" />
      </div>

      <div className=" flex flex-col gap-2 md:w-2/3 px-8">
        <p className=" bg-gray-300 h-8 rounded-full w-2/3 mb-2"></p>
        <p className=" bg-gray-300 rounded-full h-6 "></p>
        <p className=" bg-gray-300 rounded-full h-6 "></p>
        <p className=" bg-gray-300 rounded-full h-6 "></p>
        <p className=" bg-gray-300 rounded-full h-6 w-1/2"></p>
      </div>
    </div>
  );
};

export default LoadingMovieCard;
