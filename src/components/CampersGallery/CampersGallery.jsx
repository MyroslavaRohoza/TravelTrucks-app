import css from "./campersGallery.module.css";
import CampersGalleryItem from "../CampersGalleryItem/CampersGalleryItem";

const CampersGallery = ({ photos, id }) => {
  return (
    <ul className={css.campersGallery}>
      {Array.isArray(photos) &&
        photos.map((image) => (
          <CampersGalleryItem key={id}>
            <img
              src={image}
              alt={`Camper ${id}`}
              className={css.campersGalleryImg}
            />
          </CampersGalleryItem>
        ))}
    </ul>
  );
};

export default CampersGallery;
