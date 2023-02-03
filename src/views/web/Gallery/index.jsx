import Masonry from "react-masonry-css";
import { useContext, useEffect, useState } from "react";
import GalleryLightBox from "./GalleryLightBox";
import { BlogContext } from "context/BlogContext";
import { SERVER_URL } from "config";
import LoadingGallery from "components/Loading/gallery/LoadingGallery";

const GalleryPage = () => {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [lightBoxIndex, setLightBoxIndex] = useState(0);

  const { loading, gallery } = useContext(BlogContext);

  const openLightBox = (index) => {
    setIsLightBoxOpen(true);
    setLightBoxIndex(index);
  };


  //*my masonry Idea
  // const n = 5;
  // let x = 1;
  // useEffect(() => {
  //   for (let i = 1; i < n; i++) {
  //     for (let index in gallery) {
  //       if (i === index % n) {

  //         console.log(x+"="+index);
  //         x++;
  //       }
  //     }
  //   }
  // }, [gallery]);


  return (
    <>
      <div className="flex justify-center py-10  text-3xl lg:text-6xl font-bold bg-opacity-30 font-anjoman">
        گالری تصاویر
      </div>

      <div className="container gap-1 mx-auto my-6 md:gap-2 ">
        {!loading && gallery.length ? (
          <Masonry
            breakpointCols={{ default: 5, 1280: 4, 768: 3 }}
            className="flex gap-1 md:gap-2"
            columnClassName="x"
          >
            {gallery.map((img, index) => (
              <div
                key={index}
                className="relative text-sm group min-h-[33vw] sm:min-h-[300px] hover:cursor-pointer mb-1 md:mb-2 flex flex-grow"
                onClick={() => openLightBox(index)}
              >
                <img
                  className="object-cover min-w-full min-h-full"
                  src={`${SERVER_URL}/img/gallery/${img.photo}`}
                  alt={img.alt}
                />

                <p className="absolute bottom-0 hidden w-full h-0 px-4 overflow-hidden duration-200 bg-black bg-opacity-60 group-hover:h-auto group-hover:py-4 group-hover:backdrop-blur-sm lg:block">
                  {img.caption}
                </p>
              </div>
            ))}
          </Masonry>
        ) : (
          <LoadingGallery />
        )}
      </div>
      <GalleryLightBox
        setImageIndex={setLightBoxIndex}
        imageIndex={lightBoxIndex}
        setOpen={setIsLightBoxOpen}
        isOpen={isLightBoxOpen}
      />
    </>
  );
};
export default GalleryPage;
