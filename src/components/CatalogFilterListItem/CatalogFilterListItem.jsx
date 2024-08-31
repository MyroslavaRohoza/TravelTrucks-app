import css from "./catalogFilterListItem.module.css";
import Category from "../Category/Category";


const CatalogFilterListItem = ({
  children,
  id,
  iconWidth,
  iconHeight,
  fill,
  stroke,
}) => {
  return (
    <li className={css.catalogFilterItem}>
          <Category iconId={id} iconWidth={iconWidth} iconHeight={iconHeight} fill={fill} stroke={stroke}>{children}</Category>
    </li>
  );
};

export default CatalogFilterListItem;
