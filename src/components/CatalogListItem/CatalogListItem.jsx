import { useNavigate } from "react-router-dom";
import CatalogFilterList from "../ItemFilterList/CatalogFilterList";
import RedButton from "../RedButton/RedButton";
import css from "./catalogListItem.module.css";
import CamperSummary from "../CamperSummary/CamperSummary";

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
  id,
  iconId,
}) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id) {
      navigate(`/catalog/${id}`);
    }
  };

  return (
    <li className={css.listItem}>
      <div className={css.campersImgThumb}>
        <img className={css.campersImg} src={img} alt={name} />
      </div>
      <div className={css.campersInfoContainer}>
        <div className={css.campersSummaryContainer}>
          <CamperSummary
            name={name}
            rating={rating}
            reviewsCount={reviewsCount}
            location={location}
            price={price}
            id={id}
            iconId={iconId}
          />
        </div>
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
        <RedButton addClass={css.showMoreBtn} onClick={() => handleClick(id)}>
          Show more
        </RedButton>
      </div>
    </li>
  );
};

export default CatalogListItem;
