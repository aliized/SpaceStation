import MainFrame from "components/containers/MainFrame";
import GalleryCard from "./GalleryCard";

import { useContext } from "react";
import { BlogContext } from "context/BlogContext";
import MultiRenderer from "components/MultiRenderer";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import LoadingGalleryCard from "components/Loading/home/LoadingGalleryCard";

const GalleryBox = () => {
  const { loading, gallery } = useContext(BlogContext);

  return (
    <MainFrame bgColor={"bg-white"}>
      <div className="flex flex-col gap-6 lg:gap-12 items-center">
        <div className="text-3xl md:text-4xl font-bold font-anjoman flex justify-center lg:mb-7">
          <p>عکس های نجومی</p>
        </div>
        {!loading && gallery.length ? (
          <>
            {gallery
              .filter((img) => img.aspectRatio > 1.3)
              .slice(0, 5)
              .map((img) => (
                <GalleryCard key={img._id} img={img} />
              ))}
          </>
        ) : (
          <MultiRenderer containerClass={"w-full"} times={3}>
            <LoadingGalleryCard />
          </MultiRenderer>
        )}

        <Link
          to="gallery"
          className="text-blue-600 font-bold flex items-center gap-1 text-lg"
        >
          همه ی تصاویر
          <IoChevronBackOutline />
        </Link>
      </div>
    </MainFrame>
  );
};

export default GalleryBox;
