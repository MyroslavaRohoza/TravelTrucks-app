import css from "./reviews.module.css";
import { useSelector } from "react-redux";
import { useActionData } from "react-router-dom";
import Icon from "../Icon/Icon";
import { nanoid } from "@reduxjs/toolkit";

const Reviews = ({ reviews }) => {
  const reviewCount = (count) => {
    const amountOfStars = 5;
    const items = [];
    for (let i = 0; i < amountOfStars; i++) {
      if (i < count) {
        items.push(
          <li key={i}>
            <Icon
              id="icon-Rating"
              width={16}
              height={16}
              fill="var(--golden-yellow)"
              stroke="var(--golden-yellow)"
            />
          </li>
        );
      } else {
        items.push(
          <li key={i}>
            <Icon
              id="icon-Rating"
              width={16}
              height={16}
              fill="var(--white-smoke)"
              stroke="var(--white-smoke)"
            />
          </li>
        );
      }
    }
    return items;
  };

  return (
    <div>
      <ul className={css.reviewsList}>
        {Array.isArray(reviews) &&
          reviews.map((review) => (
            <li key={nanoid()}>
              <div className={css.reviewerInfo}>
                <div className={css.reviewerInitials}>
                  <p>{review.reviewer_name.charAt(0)}</p>
                </div>
                <div className={css.reviewerDetails}>
                  <p className={css.reviewerName}>{review.reviewer_name}</p>
                  <ul className={css.ratingContainer}>
                    {reviewCount(review.reviewer_rating).map((item) => item)}
                  </ul>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
