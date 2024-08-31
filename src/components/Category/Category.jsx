
import Icon from '../Icon/Icon';

const Category = ({
  children,
  iconId,
  iconWidth = 20,
  iconHeight = 20,
  fill,
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
      {children}
    </>
  );
};

export default Category
