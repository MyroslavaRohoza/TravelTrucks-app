import { nanoid } from "@reduxjs/toolkit";
import Category from "../Category/Category";

const VehicleEquipmentList = () => {

  const equipment = {
    AC: "icon-diagram",
    Automatic: "icon-fuel-pump",
    Kithen: "icon-cup-hot",
    TV: "icon-tv",
    Bathroom: "icon-bi_droplet",
    Refrigerator: "icon-refrigerator",
    Microwave: "icon-microwave",
    Gas: "icon-gas",
    Water: "icon-water",
  };

  return (
    <ul>
      {Object.keys(equipment).map((key) => (
        <li key={nanoid()}>
          <input type="checkbox" name="VehicleEquipment" />
          <Category iconId={equipment[key]}>{key}</Category>
        </li>
      ))}
    </ul>
  );
};

export default VehicleEquipmentList;
