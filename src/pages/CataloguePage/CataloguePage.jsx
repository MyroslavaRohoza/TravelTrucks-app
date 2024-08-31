import { useEffect } from "react";
import Button from "../../components/Button/Button";
import css from "./cataloguePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import CatalogListItem from "../../components/CatalogListItem/CatalogListItem";
import { selectCampersCollection } from "../../redux/campers/selectors";

const CataloguePage = () => {
  const campersCollection = useSelector(selectCampersCollection);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section>
      <main>
        {" "}
        <aside>
          * When the user clicks the Search button, the component dispatches an
          * action to fetch the filtered campervans from the API. */
          <ul>
            <li>
              <h3>Location</h3>
              <input type="text" />
            </li>
            <li>
              <h3>Filters</h3>
              <ul>
                <li>
                  <h4>Vehicle equipment </h4>
                  <ul>
                    <li>AC</li>
                    <li>Automatic</li>
                    <li>Kithen</li>
                    <li>TV</li>
                    <li>Bathroom</li>
                  </ul>
                  <ul>
                    <li>Van</li>
                    <li>Fully Integrated</li>
                    <li>Alcove</li>
                  </ul>
                </li>
              </ul>
            </li>
            <Button>Search</Button>
          </ul>
        </aside>
        <section>
          <ul className={css.catalogList}>
            {Array.isArray(campersCollection) &&
              campersCollection.map(
                ({
                  id,
                  gallery,
                  name,
                  price,
                  rating,
                  reviews,
                  location,
                  description,
                  form,
                }) => (
                  <CatalogListItem
                    key={id}
                    img={gallery[0].thumb}
                    name={name}
                    price={price}
                    rating={rating}
                    reviewsCount={reviews.length}
                    location={location}
                    description={description}
                    vehicleType={form}
                  />
                )
              )}
          </ul>
        </section>
      </main>
    </section>
  );
};

export default CataloguePage;
