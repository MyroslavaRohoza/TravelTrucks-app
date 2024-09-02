import { useParams } from "react-router-dom";
import css from "./campervanPage.module.css";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCamperDetail } from "../../redux/campers/selectors";
import CamperSummary from "../../components/CamperSummary/CamperSummary";
import CampersGallery from "../../components/CampersGallery/CampersGallery";

const CampervanPage = () => {
  const camperId = useParams().id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCamperById(camperId));
  }, [camperId, dispatch]);

  let camper = useSelector(selectCamperDetail);

  return (
    <main className={css.campervanPageContainer}>
      <section>
        {camper instanceof Object && (
          <CamperSummary
            name={camper.name}
            rating={camper.rating}
            reviewsCount={camper.reviewsCount}
            location={camper.location}
            price={camper.price}
            addClass={css.campersSummary}
          />
        )}
        <CampersGallery
          photos={
            camper instanceof Object && [
              camper.gallery[0].thumb,
              camper.gallery[1].thumb,
              camper.gallery[2].thumb,
            ]
          }
        />
      </section>
    </main>
  );
};

export default CampervanPage;
