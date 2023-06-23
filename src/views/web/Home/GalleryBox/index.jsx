import { useContext } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import LoadingGalleryCard from "components/Loading/home/LoadingGalleryCard";
import MultiRenderer from "components/MultiRenderer";
import AnimateOnScroll from "components/aos/AnimateOnScroll";
import MainFrame from "components/containers/MainFrame";
import { BlogContext } from "context/BlogContext";

import GalleryCard from "./GalleryCard";

const GalleryBox = () => {
  const { loading, gallery } = useContext(BlogContext);

  return (
    <MainFrame bgColor={"bg-white"}>
      <div className="flex flex-col gap-6 lg:gap-12 items-center px-1">
        <div className="text-3xl md:text-4xl font-bold font-anjoman flex justify-center lg:mb-7">
          <p>عکس های نجومی</p>
        </div>
        {!loading && gallery.length ? (
          <>
            {gallery
              .filter((img) => img.aspectRatio > 1.3)
              .slice(0, 5)
              .map((img) => (
                <div className="overflow-hidden rounded-3xl md:rounded-large aspect-video w-full">
                  <AnimateOnScroll>
                    <GalleryCard key={img._id} img={img} />
                  </AnimateOnScroll>
                </div>
              ))}
          </>
        ) : (
          <MultiRenderer containerClass={"w-full"} times={3}>
            <LoadingGalleryCard />
          </MultiRenderer>
        )}

        <Link
          to="gallery"
          className="text-blue-600 font-bold flex items-center gap-1 text-lg pb-2"
        >
          تصاویر بیشتر
          <IoChevronBackOutline />
        </Link>
      </div>
    </MainFrame>
  );
};

export default GalleryBox;
