import { useEffect } from "react";
import Button from "../../components/RedButton/RedButton";
import css from "./cataloguePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import CatalogListItem from "../../components/CatalogListItem/CatalogListItem";
import { selectCampersCollection } from "../../redux/campers/selectors";
import InputField from "../../components/InputField/InputField";
import VehicleFilterList from "../../components/VehicleFilterList/VehicleFilterList";
import { vehicleEquipment, vehicleType } from "../../js/vehicleEquipmentData";

const CataloguePage = () => {
  const campersCollection = useSelector(selectCampersCollection);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <main className={css.catalogMainContainer}>
      <div className={css.catalogWrapper}>
        <aside>
          <ul>
            <li>
              <h3>Location</h3>
              <InputField placeholder={"City"} />
            </li>
            <li>
              <h3>Filters</h3>
              <ul>
                <li>
                  <h4 className={css.filterTitle}>Vehicle equipment</h4>
                  <VehicleFilterList
                    vehicleInfo={vehicleEquipment}
                    inputType={"checkbox"}
                    inputName={"vehicleEquipment"}
                  />
                  <h4 className={css.filterTitle}>Vehicle type</h4>
                  <VehicleFilterList
                    vehicleInfo={vehicleType}
                    inputType={"radio"}
                    inputName={"vehicleType"}
                  />
                </li>
              </ul>
            </li>
            <Button>Search</Button>
          </ul>
        </aside>
        <section>
          <ul className={css.catalogList}>
            {Array.isArray(campersCollection) &&
              campersCollection.map((item) => (
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
              ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default CataloguePage;
