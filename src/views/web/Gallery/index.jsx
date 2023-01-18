import Masonry from "react-masonry-css";
import { useContext, useState } from "react";
import GalleryLightBox from "./GalleryLightBox";
import { BlogContext } from "context/BlogContext";
import { SERVER_URL } from "config";

const GalleryPage = () => {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [lightBoxIndex, setLightBoxIndex] = useState(0);

  const { gallery } = useContext(BlogContext);

  const openLightBox = (index) => {
    setIsLightBoxOpen(true);
    setLightBoxIndex(index);
  };

  return (
    <>
      <div className="flex justify-center py-10 text-6xl font-bold bg-opacity-30 font-anjoman">
        گالری تصاویر
      </div>
      

      <div className="container gap-1 mx-auto my-6 md:gap-2 ">
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

// import { images } from "./images";
// const GalleryPage = () => {
//   return (
//     <>
//       <div className="flex justify-center py-10 text-4xl font-bold bg-blue-700 bg-opacity-30">گالری تصاویر</div>
//       <div className="container gap-1 mx-auto my-6 md:gap-2 columns-3 md:columns-4 lg:columns-5">

//         {images.map((img,num) => (
//           <div className="relative mb-1 text-sm group md:mb-2 hover:cursor-pointer">
//             <img
//               className="object-cover w-full h-full"
//               src={img.src}
//               alt={img.caption}
//             />
//             <p className="absolute w-full bg-black backdrop-blur-[2px]	 bg-opacity-60 top-0
//             p-2">

//             {num}
//             </p>
//             <p className="absolute w-full bg-black backdrop-blur-[2px]	 bg-opacity-60 bottom-0
//             px-4 group-hover:py-4 group-hover:backdrop-blur-sm group-hover:bg-opacity-70 duration-200 h-0 group-hover:h-auto overflow-hidden">
//             {img.caption}

//             </p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
// export default GalleryPage;

// <div className="relative text-sm group only:hover:cursor-pointer">
//               <img
//                 className="object-cover w-full h-full"
//                 src={img.src}
//                 alt={img.caption}
//               />
//               <p
//                 className="absolute w-full bg-black backdrop-blur-[2px]	 bg-opacity-60 top-0
//             p-2"
//               >
//                 {num}
//               </p>
//               <p
//                 className="absolute w-full bg-black backdrop-blur-[2px]	 bg-opacity-60 bottom-0
//             px-4 group-hover:py-4 group-hover:backdrop-blur-sm group-hover:bg-opacity-70 duration-200 h-0 group-hover:h-auto overflow-hidden"
//               >
//                 {img.caption}
//               </p>
//             </div>
