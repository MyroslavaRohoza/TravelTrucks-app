import css from "./campersGallery.module.css";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lg-transitions.css";

import "../../index.css";

const CampersGallery = ({ photos }) => {
  return (
    <LightGallery
      plugins={[lgThumbnail, lgZoom]}
      speed={500}
      hideScrollbar={true}
      mousewheel={true}
      mode="lg-lollipop-rev"
      elementClassNames={css.campersGallery}
    >
      {Array.isArray(photos) &&
        photos.map((image, index) => (
          <a
            key={index}
            href={image.original}
            className={css.campersGalleryItem}
          >
            <img
              src={image.thumb}
              alt={`Photo ${index + 1}`}
              className={css.campersGalleryImg}
            />
          </a>
        ))}
    </LightGallery>
  );
};

export default CampersGallery;
