import MainBox from "./containers/MainBox";
import GalleryCard from "./GalleryCard";

import gallery1 from "../pics/dynamic/gallery1.png";
import gallery2 from "../pics/dynamic/gallery2.png";
import gallery3 from "../pics/dynamic/gallery3.png";

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
    <MainBox bgColor={"bg-white"}>
    <div className="flex flex-col gap-6 lg:gap-12 items-center">
    <div className="text-3xl font-bold flex justify-center lg:mb-7">
        <p>عکس های نجومی</p>
      </div>

      {gallery.map((photo) => (
        <GalleryCard key={photo.id} title={"no-title"} photo={photo.photo} />
      ))}
    </div>
    </MainBox>
  );
};

export default GalleryBox;
