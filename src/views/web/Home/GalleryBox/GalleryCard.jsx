import { SERVER_URL } from "config";

const GalleryCard = ({ img }) => {
  return (
    <img
      className="w-full h-full object-cover"
      src={`${SERVER_URL}/img/gallery/${img.photo}`}
      alt={img.alt}
    />
  );
};

export default GalleryCard;
