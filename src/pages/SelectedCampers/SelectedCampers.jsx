import { useSelector } from "react-redux";
import css from "./selectedCampers.module.css";
import { selectSelectedList } from "../../redux/campers/selectors";
import CatalogListItem from "../../components/CatalogListItem/CatalogListItem";

const SelectedCampers = () => {
  const selectItemsList = useSelector(selectSelectedList);
  return (
    <main className={css.selectedCampersContainer}>
      <ul className={css.selectedCampersList}>
        {Array.isArray(selectItemsList) && selectItemsList.length > 0 ? (
          selectItemsList.map((item) => (
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
              iconId={"icon-cross"}
            />
          ))
        ) : (
          <p className={css.noSelectedText}>No selected campers</p>
        )}
      </ul>
    </main>
  );
};

export default SelectedCampers;
