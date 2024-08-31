import Category from "../Category/Category";
import Icon from "../Icon/Icon";
import CatalogFilterList from "../ItemFilterList/CatalogFilterList";
import css from "./catalogListItem.module.css";

const CatalogListItem = ({
  img,
  name,
  price,
  rating,
  reviewsCount,
  location,
  description,
  transmission,
  engine,
  AC,
  bathroom,
  kitchen,
  TV,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
  form,
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

            <div className={css.campersInfoPrice}>
              <p>€{price.toFixed(2)}</p>
              <Icon id="icon-like" width={24} height={24} />
            </div>
          </div>
          <div className={css.campersInfoRating}>
            <Icon
              id="icon-Rating"
              width={16}
              height={16}
              fill="var(--golden-yellow)"
              stroke="var(--golden-yellow)"
            />
            <p className={css.rating}>{rating}</p>
            <p>({reviewsCount} Reviews)</p>
            <p className={css.location}>{location}</p>
          </div>
          <div>
            <p className={css.description}>{description}</p>
            <CatalogFilterList
              transmission={transmission}
              engine={engine}
              AC={AC}
              bathroom={bathroom}
              kitchen={kitchen}
              TV={TV}
              radio={radio}
              refrigerator={refrigerator}
              microwave={microwave}
              gas={gas}
              water={water}
              form={form}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CatalogListItem;
