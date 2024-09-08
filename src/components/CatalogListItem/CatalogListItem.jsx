import { useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon";
import CatalogFilterList from "../ItemFilterList/CatalogFilterList";
import RedButton from "../RedButton/RedButton";
import css from "./catalogListItem.module.css";
import CamperSummary from "../CamperSummary/CamperSummary";
import { useRef } from "react";
import { selectedList } from "../../redux/campers/campersSlice";
import { useDispatch } from "react-redux";

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
}) => {
  const navigate = useNavigate();
  const selectedBtnRef = useRef(null);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    if (id) {
      navigate(`/catalog/${id}`);
    }
  };

  const handleSelectBtnClick = (id) => {
    dispatch(selectedList(id));
    selectedBtnRef.current.classList.toggle(css.selected);
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
          />
          <button
            className={css.selectBtn}
            onClick={() => handleSelectBtnClick(id)}
          >
            <Icon
              id="icon-like"
              ref={selectedBtnRef}
              width={26}
              height={24}
              addClass={css.likeIcon}
            />
          </button>
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
