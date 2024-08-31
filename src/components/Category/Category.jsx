import Icon from "../Icon/Icon";

const Category = ({
  iconId,
  children,
  iconWidth = 20,
  iconHeight = 20,
  fill = "var(--charcoal)",
  stroke,
}) => {
  return (
    <>
      <Icon
        id={iconId}
        width={iconWidth}
        height={iconHeight}
        fill={fill}
        stroke={stroke}
      />
      <p>{children}</p>
    </>
  );
};

export default Category;
