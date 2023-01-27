import { SERVER_URL } from "config";

const GalleryCard = ({ img }) => {
  return (
    <div className="overflow-hidden rounded-3xl md:rounded-large aspect-video w-full">
      <img className="w-full h-full object-cover" src={`${SERVER_URL}/img/gallery/${img.photo}`} alt={img.alt} />
    </div>
  );
};

export default GalleryCard;
