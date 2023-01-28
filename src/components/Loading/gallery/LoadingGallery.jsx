import Masonry from "react-masonry-css";

const LoadingGallery = () => {
  return (
    <Masonry
              breakpointCols={{ default: 5, 1280: 4, 768: 3 }}
              className="flex gap-1 md:gap-2 animate-pulse "
            >
              {[...Array(20)].map((e, i) =>
                i % 2 ? (
                  <div className=" min-h-[33vw] sm:min-h-[300px] mb-1 md:mb-2 flex flex-grow">
                    <div className="bg-gray-700 object-cover min-w-full min-h-full" />
                  </div>
                ) : (
                  <div className=" min-h-[33vw] sm:min-h-[400px] mb-1 md:mb-2 flex flex-grow">
                    <div className="bg-gray-700 object-cover min-w-full min-h-full" />
                  </div>
                )
              )}
            </Masonry>
  );
};

export default LoadingGallery;
