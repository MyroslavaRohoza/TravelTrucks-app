import css from "./reviews.module.css";
import { useSelector } from "react-redux";
import { useActionData } from "react-router-dom";
import Icon from "../Icon/Icon";

const Reviews = ({ reviews }) => {

  const reviewCount = (count) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(
        <li key={i}>
          <Icon
            id="icon-Rating"
            width={20}
            height={20}
            fill="var(--charcoal-gray)"
            stroke="var(--charcoal-gray)"
          />
        </li>
      );
    }
    return items; 
  };
  return (
    <div>
      <ul>
        {Array.isArray(reviews) &&
          reviews.map((review) => (
            <li key={review.id}>
              <div className={css.reviewerInfo}>
                <div>{review.reviewer_name.charAt(0)}</div>
                <div>
                  <p>{review.reviewer_name}</p>
                  <ul>
                    {reviewCount(review.reviewer_rating).map((item)=>item)}
                  </ul>
                  <p>{review.reviewer_rating}</p>
                </div>
              </div>
              <p>{review.comment}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
