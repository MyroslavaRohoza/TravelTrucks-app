import { Link, Route, Routes, useParams } from "react-router-dom";
import css from "./campervanPage.module.css";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCamperDetail } from "../../redux/campers/selectors";
import CamperSummary from "../../components/CamperSummary/CamperSummary";
import CampersGallery from "../../components/CampersGallery/CampersGallery";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";

const CampervanPage = () => {
  const camperId = useParams().id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCamperById(camperId));
  }, [camperId, dispatch]);

  let camper = useSelector(selectCamperDetail);
  const {description, name, rating, reviewsCount, location, price, gallery } =
    camper instanceof Object && camper;

  const camperFilterList = camper instanceof Object && {
    transmission: camper.transmission,
    engine: camper.engine,
    AC: camper.AC,
    bathroom: camper.bathroom,
    kitchen: camper.kitchen,
    TV: camper.TV,
    radio: camper.radio,
    refrigerator: camper.refrigerator,
    microwave: camper.microwave,
    gas: camper.gas,
    water: camper.water,
    form: camper.form,
  };

  const vechicleDetails = camper instanceof Object && {
    form: camper.form,
    length: camper.length,
    width: camper.width,
    height: camper.height,
    tank: camper.tank,
    consumption: camper.consumption,
  };

  const galleryImgArr = camper instanceof Object && [
    gallery[0].thumb,
    gallery[1].thumb,
    gallery[2].thumb,
  ];

  return (
    <main className={css.campervanPageContainer}>
      <section>
        {
          <CamperSummary
            name={name}
            rating={rating}
            reviewsCount={reviewsCount}
            location={location}
            price={price}
            addClass={css.campersSummary}
          />
        }
        <CampersGallery photos={Array.isArray(gallery) && galleryImgArr} />
        <p className={`text`}>{description}</p>
        <div className={css.featuresReviewsContainer}>
          <div className={css.featuresReviews}>
            <Link to="features">
              <h3>Features</h3>
            </Link>
            <Link to="reviews">
              <h3>Reviews</h3>
            </Link>
          </div>
        </div>
        <Routes>
          <Route
            path="features"
            element={
              <Features
                camperFilterList={camperFilterList}
                vechicleDetails={vechicleDetails}
              />
            }
          />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </section>
    </main>
  );
};

export default CampervanPage;
