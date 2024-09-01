import Category from "../Category/Category";
import Icon from "../Icon/Icon";
import CatalogFilterList from "../ItemFilterList/CatalogFilterList";
import RedButton from "../RedButton/RedButton";
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
      <div className={css.campersImgThumb}>
        <img className={css.campersImg} src={img} alt={name} />
      </div>
      <div className={css.campersInfoContainer}>
        <div className={css.campersInfo}>
          <h2 className={css.campersName}>{name}</h2>
          <div className={css.ratingInfo}>
            <Icon
              id="icon-Rating"
              width={16}
              height={16}
              fill="var(--golden-yellow)"
              stroke="var(--golden-yellow)"
            />
            <p className={css.rating}>{rating}</p>
            <p>({reviewsCount} Reviews)</p>
            <p className={css.location}>
              <Icon id="icon-map" width={16} height={16} />
              {location}
            </p>
          </div>
        </div>
        <p className={css.price}>€{price.toFixed(2)}</p>
        <button className={css.selectBtn}>
          <Icon id="icon-like" width={24} height={24} />
        </button>
        <p className={css.description}>{description}</p>
        <div className={css.filterList}>
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
        <RedButton className={css.showMoreBtn}>Show more</RedButton>
      </div>
    </li>
  );
};

export default CatalogListItem;
