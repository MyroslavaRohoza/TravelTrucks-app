import css from "./campersGallery.module.css";
import CampersGalleryItem from "../CampersGalleryItem/CampersGalleryItem";

const CampersGallery = ({ photos, id }) => {
  return (
    <ul className={css.campersGallery}>
      {Array.isArray(photos) &&
        photos.map((image, index) => (
          <CampersGalleryItem key={index}>
            <img
              src={image}
              alt={`Camper ${id} - ${index}`}
              className={css.campersGalleryImg}
            />
          </CampersGalleryItem>
        ))}
    </ul>
  );
};

export default CampersGallery;
