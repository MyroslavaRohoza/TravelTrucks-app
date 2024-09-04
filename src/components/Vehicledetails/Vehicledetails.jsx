import css from "./vehicledetails.module.css";
import UnderlineDecorator from "../UnderlineDecorator/UnderlineDecorator";


const Vehicledetails = ({ vechicleDetails }) => {
  const formatMeasurement = (input) => {
    return input && input.replace(/(\d+(\.\d+)?)([^\d\s]+)/g, "$1 $3");
  };

  return (
    <div>
      <UnderlineDecorator>
        <h3>Vehicle details</h3>
      </UnderlineDecorator>
      <ul className={css.vehicledetailsList}>
        <li className={css.listItem}>
          <p>Form</p>
          <p>{vechicleDetails.form}</p>
        </li>
        <li className={css.listItem}>
          <p>Length</p>
          <p>{formatMeasurement(vechicleDetails.length)}</p>
        </li>
        <li className={css.listItem}>
          <p>Width</p>
          <p>{formatMeasurement(vechicleDetails.width)}</p>
        </li>
        <li className={css.listItem}>
          <p>Height</p>
          <p>{formatMeasurement(vechicleDetails.height)}</p>
        </li>
        <li className={css.listItem}>
          <p>Tank</p>
          <p>{formatMeasurement(vechicleDetails.tank)}</p>
        </li>
        <li className={css.listItem}>
          <p>Consumption</p>
          <p>{formatMeasurement(vechicleDetails.consumption)}</p>
        </li>
      </ul>
    </div>
  );
};

export default Vehicledetails;
