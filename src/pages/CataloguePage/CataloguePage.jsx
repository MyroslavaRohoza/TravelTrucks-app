import { useEffect } from "react";
import Button from "../../components/RedButton/RedButton";
import css from "./cataloguePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import CatalogListItem from "../../components/CatalogListItem/CatalogListItem";
import { selectAmountPerPage, selectCampersCollection, selectCurrentPage, selectTotal } from "../../redux/campers/selectors";
import VehicleFilterList from "../../components/VehicleFilterList/VehicleFilterList";
import { vehicleEquipment, vehicleType } from "../../js/vehicleEquipmentData";
import Icon from "../../components/Icon/Icon";
import UnderlineDecorator from "../../components/UnderlineDecorator/UnderlineDecorator";
import WhiteButton from "../../components/WhiteButton/WhiteButton";

const CataloguePage = () => {
  const campersCollection = useSelector(selectCampersCollection);
  const total = useSelector(selectTotal);
  const currentPage = useSelector(selectCurrentPage);
  const amountPerPage = useSelector(selectAmountPerPage)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const onButtonClick = (totalPage, currentPage, amount) => {
    let page = 1;
    const countOfPage = Math.ceil(totalPage / amount);

    if (currentPage <= countOfPage) { 
      page += 1;
      dispatch(fetchCampers(page));
    }


  };

  return (
    <main className={css.catalogMainContainer}>
      <div className={css.catalogWrapper}>
        <aside>
          <ul>
            <li>
              <label className={css.locationLabel}>
                Location
                <div className={css.inputContainer}>
                  <Icon
                    id="icon-map"
                    width={20}
                    height={20}
                    fill="var(--charcoal-gray)"
                    addClass={css.mapIcon}
                  />
                  <input
                    type="text"
                    placeholder="City"
                    style={{ paddingLeft: "48px" }}
                    className={`inputField ${css.locationField}`}
                  />
                </div>
              </label>
            </li>
            <li>
              <p className={css.filter}>Filters</p>
              <ul>
                <li>
                  <UnderlineDecorator>
                    <h4 className={css.filterTitle}>Vehicle equipment</h4>
                  </UnderlineDecorator>
                  <VehicleFilterList
                    vehicleInfo={vehicleEquipment}
                    inputType={"checkbox"}
                    inputName={"vehicleEquipment"}
                  />
                  <UnderlineDecorator>
                    <h4 className={css.filterTitle}>Vehicle type</h4>
                  </UnderlineDecorator>
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
                  id={item.id}
                />
              ))}
            <WhiteButton addClass={css.loadMoreBtn} onClick={() => onButtonClick(total, currentPage, amountPerPage)}>Load more</WhiteButton>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default CataloguePage;
