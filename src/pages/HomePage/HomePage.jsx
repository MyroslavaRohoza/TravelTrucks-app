import css from "./homePage.module.css";
import { Link } from "react-router-dom";
import RedButton from "../../components/RedButton/RedButton.jsx";
import { useEffect } from "react";
const HomePage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; 

    return () => {
        document.body.style.overflow = 'auto'; 
    };
}, []);
  
  return (
    <main className={css.homePageMain} >
      <section className={`${css.homePageSection}`}>
        <div className={css.textContainer}>
          <h1 className={`${css.textColor} ${css.text}`}>
            Campers of your dreams
          </h1>
          <h2 className={`${css.textColor} ${css.text}`}>
            You can find everything you want in our catalog
          </h2>
          <Link to="/catalog">
            <RedButton>View Now</RedButton>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
