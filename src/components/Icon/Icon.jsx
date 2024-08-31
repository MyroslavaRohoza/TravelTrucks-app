import css from "./icon.module.css";

const Icon = ({
  id,
  width,
  height,
  fill ,
  stroke ,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    aria-hidden="true"
    className={css.icon}
    {...props}
  >
    <use xlinkHref={`src/icons/sprite.svg#${id}`} />
  </svg>
);

export default Icon;
