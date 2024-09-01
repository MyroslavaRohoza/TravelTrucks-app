import css from "./vehicleEquipment.module.css";

const VehicleEquipmentItem = ({ children }) => {
  return <li className={css.vehicleEquipmentItem}>{children}</li>;
};

export default VehicleEquipmentItem;
