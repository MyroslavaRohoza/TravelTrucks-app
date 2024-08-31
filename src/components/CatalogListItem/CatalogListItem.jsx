import css from "./catalogListItem.module.css";

const CatalogListItem = ({
  img,
  name,
  price,
  rating,
  reviewsCount,
  location,
  description,
  vehicleType,
}) => {
  return (
    <li className={css.listItem}>
      <div className={css.listItemContainer}>
        <div className={css.campersImgThumb}>
          <img className={css.campersImg} src={img} alt={name} />
        </div>

        <div className={css.campersInfoContainer}>
          <div className={css.campersInfo}>
            <h2>{name}</h2>
        
            <div>
              <p>{price}</p>
              <p>icon</p>
            </div>
          </div>
    <div className={css.campersInfoRating}>
              <p>icon</p>
              <p>{rating}</p>
              <p>({reviewsCount}Reviews)</p>
              <p>{location}</p>
            </div>
          <p className={css.description}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default CatalogListItem;
