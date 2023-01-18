import MainFrame from "components/containers/MainFrame";
import GalleryCard from "./GalleryCard";

import gallery1 from "assets/images/dynamic/gallery1.webp";
import gallery2 from "assets/images/dynamic/gallery2.webp";
import gallery3 from "assets/images/dynamic/gallery3.webp";

const GalleryBox = () => {
  const gallery = [
    {
      id: 1,
      photo: gallery1,
    },
    {
      id: 2,
      photo: gallery2,
    },
    {
      id: 3,
      photo: gallery3,
    },
  ];

  return (
    <MainFrame bgColor={"bg-white"}>
      <div className="flex flex-col gap-6 lg:gap-12 items-center">
        <div className="text-3xl md:text-4xl font-bold font-anjoman flex justify-center lg:mb-7">
          <p>عکس های نجومی</p>
        </div>

        {gallery.map((photo) => (
          <GalleryCard key={photo.id} title={"no-title"} photo={photo.photo} />
        ))}
      </div>
    </MainFrame>
  );
};

export default GalleryBox;
