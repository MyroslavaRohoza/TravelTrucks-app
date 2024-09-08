import css from "./catalogFilterList.module.css";
import CatalogFilterListItem from "../CatalogFilterListItem/CatalogFilterListItem";
import Category from "../Category/Category";

const CatalogFilterList = ({
  transmission,
  engine,
  AC,
  bathroom,
  kitchen,
  TV,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
  form,
}) => {
  function getFilterList() {
    return {
      Transmission: {
        value: transmission,
        iconId: "icon-diagram",
      },
      Engine: {
        value: engine,
        iconId: "icon-fuel-pump",
      },
      AC: {
        value: AC,
        iconId: "icon-wind",
      },
      Bathroom: {
        value: bathroom,
        iconId: "icon-bi_droplet",
      },
      Kitchen: {
        value: kitchen,
        iconId: "icon-cup-hot",
      },
      TV: {
        value: TV,
        iconId: "icon-tv",
      },
      Radio: {
        value: radio,
        iconId: "icon-ui-radios",
      },
      Refrigerator: {
        value: refrigerator,
        iconId: "icon-refrigerator",
      },
      Microwave: {
        value: microwave,
        iconId: "icon-microwave",
      },
      Gas: {
        value: gas,
        iconId: "icon-gas",
      },
      Water: {
        value: water,
        iconId: "icon-water",
      },
      VehicleType: {
        value: form,
        iconId:
          (form === "panelTruck" && "icon-bi_grid-1x2") ||
          (form === "fullyIntegrated" && "icon-bi_grid") ||
          (form === "alcove" && "icon-bi_grid-3x3-gap"),
      },
    };
  }

  const filterList = getFilterList();

  return (
    <ul className={css.filterList}>
      {Object.entries(filterList).map(([key, { value, iconId }]) =>
        key === "Transmission" || key === "VehicleType" || key === "Engine" ? (
          <CatalogFilterListItem key={key} id={iconId}>
            {String(
              typeof value === "string" &&
                value.charAt(0).toUpperCase() +
                  value.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2")
            )}
          </CatalogFilterListItem>
        ) : (
          <CatalogFilterListItem key={key} id={iconId}>
            {key}
          </CatalogFilterListItem>
        )
      )}
    </ul>
  );
};

export default CatalogFilterList;
