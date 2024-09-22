import css from "./campersGallery.module.css";
import CampersGalleryItem from "../CampersGalleryItem/CampersGalleryItem";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const CampersGallery = ({ photos, id }) => {
  return (
    <ul className={css.campersGallery}>
      {Array.isArray(photos) &&
        photos.map((image, index) => (
          <CampersGalleryItem key={index}>
            <LightGallery plugins={[lgThumbnail, lgZoom]}>
              <a href={image.original}>
                <img
                  src={image.thumb}
                  alt={`Camper ${index}`}
                  className={css.campersGalleryImg}
                />
              </a>
            </LightGallery>
          </CampersGalleryItem>
        ))}
    </ul>
  );
};

export default CampersGallery;
