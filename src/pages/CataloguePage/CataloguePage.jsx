import { useEffect } from "react";
import Button from "../../components/Button/Button";
import css from "./cataloguePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import CatalogListItem from "../../components/CatalogListItem/CatalogListItem";
import { selectCampersCollection } from "../../redux/campers/selectors";
import Category from "../../components/Category/Category";

const CataloguePage = () => {
  const campersCollection = useSelector(selectCampersCollection);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <main className={css.catalogueContainer}>
      <aside>
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
      <div>
        <ul className={css.catalogList}>
          {Array.isArray(campersCollection) &&
            campersCollection.map(
              (
               item
              ) => (
                <CatalogListItem
                  key={item.id}
                  img={item.gallery[0].thumb}
                  name={item.name}
                  price={item.price}
                  rating={item.rating}
                  reviewsCount={item.reviews.length}
                  location={item.location}
                  description={item.description}
                  form={item.form}
                  transmission={item.transmission}
                  engine={item.engine}
                  AC={item.AC}
                  bathroom={item.bathroom}
                  kitchen={item.kitchen}
                  TV={item.TV}
                  radio={item.radio}
                  refrigerator={item.refrigerator}
                  microwave={item.microwave}
                  gas={item.gas}
                  water={item.water}
                />
              )
            )}
        </ul>
      </div>
    </main>
  );
};

export default CataloguePage;
