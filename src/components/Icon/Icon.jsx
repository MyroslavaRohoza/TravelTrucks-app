import css from "./icon.module.css";
import { icons as sprite } from "../../assets/index.js";

const Icon = ({ id, width, height, fill, stroke, addClass = "", ...props }) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    aria-hidden="true"
    className={`${addClass} ${css.icon}`}
    {...props}
  >
    <use
      xlinkHref={`${sprite}#${id}`}
    />
  </svg>
);

export default Icon;
