import { nanoid } from "@reduxjs/toolkit";
import css from "./vehicleFilterList.module.css";
import Category from "../Category/Category";
import VehicleEquipmentItem from "../VehicleEquipmentItem/VehicleEquipmentItem";

const VehicleFilterList = ({ vehicleInfo, inputType, inputName }) => {
  return (
    <ul className={css.vehicleEquipmentList}>
      {Object.keys(vehicleInfo).map((key) => (
        <VehicleEquipmentItem key={nanoid()}>
          <input
            type={inputType}
            name={inputName}
            className={css.vehicleEquipmentField}
          />
          <div className={css.category}>
            <Category iconId={vehicleInfo[key]} iconWidth={32} iconHeight={32}>
              {key}
            </Category>
          </div>
        </VehicleEquipmentItem>
      ))}
    </ul>
  );
};

export default VehicleFilterList;
