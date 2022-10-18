const GalleryCard = ({ photo, title }) => {
  return (
    <div>
      <img src={photo} alt={title} />
    </div>
  );
};

export default GalleryCard;
