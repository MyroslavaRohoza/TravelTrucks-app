import Icon from "../Icon/Icon";
import css from "./category.module.css";
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
      <p className={css.categoryText}>{children}</p>
    </>
  );
};

export default Category;
