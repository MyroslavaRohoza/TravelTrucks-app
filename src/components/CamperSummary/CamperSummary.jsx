import { useEffect, useRef } from "react";
import Icon from "../Icon/Icon";
import MultiActionButton from "../MultiActionButton/MultiActionButton";
import css from "./camperSummary.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectedList } from "../../redux/campers/campersSlice";
import { selectSelectedListIds } from "../../redux/campers/selectors";

const CamperSummary = ({
  name,
  rating,
  reviewsCount,
  location,
  price,
  id,
  iconId,
}) => {

  const selectedId = useSelector(selectSelectedListIds);

useEffect(() => {
  if (selectedId.includes(id)) {
    selectedBtnRef.current.classList.add(css.selected);
  }else{
    selectedBtnRef.current.classList.remove(css.selected);
  }

}, [selectedId, id]);

 const handleSelectBtnClick = (id) => {
   dispatch(selectedList(id));
   selectedBtnRef.current.classList.toggle(css.selected);
 };
  const selectedBtnRef = useRef(null);
  const dispatch = useDispatch();
  return (
    <div className={css.campersSummary}>
      <div className={css.campersInfo}>
        <h2 className={css.campersInfoHeader}>{name}</h2>
        <div className={css.priceAndActions}>
          <h2 className={css.campersInfoHeader}>€{price?.toFixed(2)}</h2>
          <MultiActionButton
            id={id}
            handleSelectBtnClick={handleSelectBtnClick}
            addClass={css.selectBtn}
          >
            <Icon
              id={iconId}
              ref={selectedBtnRef}
              width={26}
              height={24}
              addClass={css.likeIcon}
            />
          </MultiActionButton>
        </div>
      </div>
      <div className={css.reviewsInfo}>
        <div className={css.ratingContainer}>
          <Icon
            id="icon-Rating"
            width={16}
            height={16}
            fill="var(--golden-yellow)"
            stroke="var(--golden-yellow)"
            addClass={css.ratingIcon}
          />
          <p className={css.rating}>{rating}</p>
          <p>({reviewsCount} Reviews)</p>
        </div>

        <div className={css.locationInfo}>
          <Icon id="icon-map" width={16} height={16} />
          <p className={css.location}>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default CamperSummary;
