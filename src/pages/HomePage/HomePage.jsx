import css from "./homePage.module.css";
import Button from "../../components/Button/Button.jsx";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <section className={css.homePageSection}>
      <div className={css.textContainer}>
        <h1 className={`${css.textColor} ${css.text}`}>
          Campers of your dreams
        </h1>
        <h2 className={`${css.textColor} ${css.text}`}>
          You can find everything you want in our catalog
        </h2>
        <Link to="/catalog">
          <Button
            btnColor="var(--light-tomato)"
            textColor="var(--white)"
            className={css.btn}
            padding="16px 60px"
            border="none"
          >
            View Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
