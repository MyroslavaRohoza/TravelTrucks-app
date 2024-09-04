import CamperForm from "../CamperForm/CamperForm";
import FeaturesContainer from "../FeaturesContainer/FeaturesContainer";
import css from "./camperFormContainer.module.css";

const CamperFormContainer = () => {
  return (
    <div>
      <FeaturesContainer
        backgroundColor="var(--white)"
        borderColor="var(--light-gray)"
      >
        <h3>Book your campervan now</h3>
        <p className={`text ${css.connectedText}`}>
          Stay connected! We are always ready to help you.
        </p>
        <CamperForm />
      </FeaturesContainer>
    </div>
  );
};

export default CamperFormContainer;
