const Icon = ({ id, width, height, ...props }) => (
  <svg width={width} height={height} aria-hidden="true" {...props}>
    <use xlinkHref={`src/icons/sprite.svg#${id}`} />
  </svg>
);

export default Icon;
