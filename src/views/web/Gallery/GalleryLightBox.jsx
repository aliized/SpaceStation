import Lightbox from "react-spring-lightbox";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

import { useContext } from "react";
import { BlogContext } from "context/BlogContext";

const GalleryLightBox = ({ setImageIndex, imageIndex, setOpen, isOpen }) => {
  const { gallery } = useContext(BlogContext);
  const gotoPrevious = () => {
    imageIndex > 0 && setImageIndex(imageIndex - 1);
  };

  const gotoNext = () => {
    imageIndex + 1 < gallery.length && setImageIndex(imageIndex + 1);
  };
  if (gallery.length > 0) {
    return (
      <>
        <Lightbox
          isOpen={isOpen}
          onPrev={gotoPrevious}
          onNext={gotoNext}
          images={gallery}
          currentIndex={imageIndex}
          className="bg-black backdrop-blur-sm bg-opacity-60 rtl"
          /* Add your own UI */
          renderHeader={() => (
            <div className="flex justify-start text-5xl p-4">
              <button
                type="button"
                className=" drop-shadow-[1px_1px_5px_rgba(0,0,0,0.7)] z-10 text-gray-400"
                onClick={() => setOpen(false)}
              >
                <IoClose />
              </button>
            </div>
          )}
          renderFooter={() => (
            <div className="flex justify-between p-3 bg-black bg-opacity-40 font-vazir drop-shadow-[1px_1px_5px_rgba(0,0,0,0.7)] z-10">
              <p>{gallery[imageIndex].caption}</p>
              <a
                className="text-3xl text-gray-400"
                href={gallery[imageIndex].src}
                download="my_painting.png"
                target="blank"
              >
                <FiDownload />
              </a>
            </div>
          )}
          renderPrevButton={() => (
            <button
              onClick={gotoNext}
              type="button"
              className="hidden md:block text-5xl  mx-1 drop-shadow-[1px_1px_5px_rgba(0,0,0,0.7)] z-10 text-gray-400"
            >
              {" "}
              <IoChevronForward />
            </button>
          )}
          renderNextButton={() => (
            <button
              onClick={gotoPrevious}
              type="button"
              className="hidden md:block text-5xl mx-1 drop-shadow-[1px_1px_5px_rgba(0,0,0,0.7)] z-10 text-gray-400"
            >
              {" "}
              <IoChevronBack />
            </button>
          )}
          onClose={() => setOpen(false)}
          pageTransitionConfig={{
            from: { transform: "scale(0.8)", opacity: 0 },
            enter: { transform: "scale(1)", opacity: 1 },
            leave: { transform: "scale(0.8)", opacity: 0 },
            config: { mass: 1, tension: 320, friction: 32 },
          }}

        // renderImageOverlay={() => (<ImageOverlayComponent >)}
        /* Use single or double click to zoom */
        // singleClickToZoom
        />
      </>
    );
  }
};

export default GalleryLightBox;

// <div
// className={`${
//   isOpen ? "block" : "hidden"
// } fixed inset-0 overflow-y-auto bg-black backdrop-blur-sm bg-opacity-60 flex justify-center items-center`}
// >
// <div className="absolute top-4 right-4 flex justify-start  text-4xl">

// <button type="button" className="absolute text-white">
//   <IoClose />
// </button>
// </div>

// <div className="md:w-2/3 flex justify-center items-center text-4xl">
// <button type="button" className="absolute left-0 bg-black bg-opacity-50 mx-1"> <IoChevronBack/></button>
//   <img className="object-cover " src={image.src} alt={image.width} />
//   <button type="button" className="absolute bg-black bg-opacity-60 right-0 rounded-full mx-1"> <IoChevronForwardCircleOutline/></button>
// </div>
// </div>
