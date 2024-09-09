import css from "./features.module.css";
import CatalogFilterList from "../ItemFilterList/CatalogFilterList";
import Vehicledetails from "../Vehicledetails/Vehicledetails";
import FeaturesContainer from "../FeaturesContainer/FeaturesContainer";

const Features = ({ camperFilterList, vechicleDetails }) => {
  return (
    <div className={css.featuresContainer}>
      <FeaturesContainer
        backgroundColor="var(--white-smoke)"
        borderColor="var(--white-smoke)"
      >
        <CatalogFilterList
          transmission={camperFilterList.transmission}
          engine={camperFilterList.engine}
          AC={camperFilterList.AC}
          bathroom={camperFilterList.bathroom}
          kitchen={camperFilterList.kitchen}
          TV={camperFilterList.TV}
          radio={camperFilterList.radio}
          refrigerator={camperFilterList.refrigerator}
          microwave={camperFilterList.microwave}
          gas={camperFilterList.gas}
          water={camperFilterList.water}
          form={camperFilterList.form}
        />
        <Vehicledetails vechicleDetails={vechicleDetails} />
      </FeaturesContainer>
    </div>
  );
};

export default Features;
