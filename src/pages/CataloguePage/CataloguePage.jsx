import { useEffect } from "react";
import css from "./cataloguePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCampers,
  fetchOthersCampers,
} from "../../redux/campers/operations";
import CatalogListItem from "../../components/CatalogListItem/CatalogListItem";
import {
  selectAmountPerPage,
  selectCampersCollection,
  selectCurrentPage,
  selectError,
  selectTotal,
} from "../../redux/campers/selectors";
import VehicleFilterList from "../../components/VehicleFilterList/VehicleFilterList";
import { vehicleEquipment, vehicleType } from "../../js/vehicleEquipmentData";
import Icon from "../../components/Icon/Icon";
import UnderlineDecorator from "../../components/UnderlineDecorator/UnderlineDecorator";
import WhiteButton from "../../components/WhiteButton/WhiteButton";
import { useRef } from "react";
import { setCurrentPage, selectFilter } from "../../redux/campers/campersSlice";
import RedButton from "../../components/RedButton/RedButton";

const CataloguePage = () => {
  const currentPage = useSelector(selectCurrentPage);
  const campersCollection = useSelector(selectCampersCollection);
  const total = useSelector(selectTotal);
  const amount = useSelector(selectAmountPerPage);
  const error = useSelector(selectError);

  const loadMoreButtonRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  useEffect(() => {
    checkTotal(total, amount);
  }, [total, amount]);

  const onButtonClick = (total, currentPage, amount) => {
    const nextPage = currentPage + 1;

    dispatch(setCurrentPage(nextPage));
    dispatch(fetchOthersCampers(nextPage));
    checkPageStatus(total, nextPage, amount);
  };

  const checkPageStatus = (total, currentPage, amount) => {
    const countOfPage = Math.ceil(total / amount);
    const isLastPage = currentPage >= countOfPage;
    if (loadMoreButtonRef.current) {
      loadMoreButtonRef.current.style.display = isLastPage ? "none" : "block";
    }
  };

  const checkTotal = (total, amount) => {
    if (loadMoreButtonRef.current) {
      if (total > amount) {
        loadMoreButtonRef.current.style.display = "block";
      } else {
        loadMoreButtonRef.current.style.display = "none";
      }
    }
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const data = {
      equipment: {},
      type: {
        form: "",
      },
      camperslocation: { location: "" },
    };

    for (let element of form.elements) {
      if (element.type === "checkbox" && element.checked) {
        data.equipment[element.value] = true;
      }

      if (element.type === "radio" && element.checked) {
        data.type.form = form.elements.form.value;
      } else {
        data.camperslocation.location = form.elements.location.value;
      }
    }

    dispatch(setCurrentPage(1));
    dispatch(selectFilter(data));
    dispatch(fetchCampers());
  };

  return (
    <main className={css.catalogMainContainer}>
      <div className={css.catalogWrapper}>
        <aside>
          <form onSubmit={onFormSubmit}>
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
                      name="location"
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
                      inputType="checkbox"
                      inputName="equipment"
                    />
                    <UnderlineDecorator>
                      <h4 className={css.filterTitle}>Vehicle type</h4>
                    </UnderlineDecorator>
                    <VehicleFilterList
                      vehicleInfo={vehicleType}
                      inputType="radio"
                      inputName="form"
                    />
                  </li>
                </ul>
              </li>
              <RedButton>Search</RedButton>
            </ul>
          </form>
        </aside>
        <section>
          {error ? (
            <p className={css.errorText}>No data on request</p>
          ) : (
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
              <WhiteButton
                addClass={css.loadMoreBtn}
                onClick={() => onButtonClick(total, currentPage, amount)}
                ref={loadMoreButtonRef}
              >
                Load more
              </WhiteButton>
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default CataloguePage;
