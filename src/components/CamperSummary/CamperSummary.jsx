import Icon from "../Icon/Icon";
import css from "./CamperSummary.module.css";

const CamperSummary = ({ name, rating, reviewsCount, location, price }) => {
  return (
    <div className={css.campersInfo}>
      <div className={css.ratingInfo}>
        <h2 className={css.campersInfoHeader}>{name}</h2>
        <div className={css.ratingContainer}>
          <div className={css.reviewsInfo}>
            <Icon
              id="icon-Rating"
              width={16}
              height={16}
              fill="var(--golden-yellow)"
              stroke="var(--golden-yellow)"
            />
            <div className={css.reviews}>
              <p className={css.rating}>{rating}</p>
              <p>({reviewsCount} Reviews)</p>
            </div>
          </div>
          <p className={css.location}>
            <Icon id="icon-map" width={16} height={16} />
            {location}
          </p>
        </div>
      </div>
      <h2 className={css.campersInfoHeader}>€{price.toFixed(2)}</h2>
    </div>
  );
};

export default CamperSummary;
