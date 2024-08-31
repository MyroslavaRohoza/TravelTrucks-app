//
import React from "react";

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
      engine: {
        value: engine,
        iconId: "icon-fuel-pump",
      },
      AC: {
        value: AC,
        iconId: "icon-wind",
      },
      Bathroom: {
        value: bathroom,
        iconId: "icon-bathroom",
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
          (form === "Van" && "icon-bi_grid-1x2") ||
          (form === "Fully Integrated" && "icon-bi_grid") ||
          (form === "Alcove" && "icon-bi_grid-3x3-gap"),
      },
    };
  }

  const filterList = getFilterList(
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
    form
  );

  return (
    <ul>
      {Object.entries(filterList).map(([key, { value }]) =>
        key === "Transmission" || key === "VehicleType" ? (
          <li key={key}>{String(value)}</li>
        ) : (
          <li key={key}>{key}</li>
        )
      )}
    </ul>
  );
};

export default CatalogFilterList;
