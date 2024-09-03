import css from "./featuresContainer.module.css";

const FeaturesContainer = ({ children, backgroundColor, borderColor }) => {
    return <div className={css.featuresContainer} style={{ backgroundColor, borderColor }}>{children}</div>;
};
export default FeaturesContainer