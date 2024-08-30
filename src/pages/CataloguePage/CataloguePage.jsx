import Button from "../../components/Button/Button";
import css from "./cataloguePage.module.css";

const CataloguePage = () => {
  return (
    <section>
      <aside>
        <ul>
          <li>
            <h3>Location</h3>
            <input type="text" />
          </li>
          <li>
            <h3>Filters</h3>
            <ul>
              <li>
                <h4>Vehicle equipment </h4>
                <ul>
                  <li>AC</li>
                  <li>Automatic</li>
                  <li>Kithen</li>
                  <li>TV</li>
                  <li>Bathroom</li>
                </ul>
                <ul>
                  <li>Van</li>
                  <li>Fully Integrated</li>
                  <li>Alcove</li>
                </ul>
              </li>
            </ul>
          </li>
          <Button>Search</Button>
        </ul>
      </aside>
      <main>
        <section>
          <ul className={css.catalogList}>
            <li>
            </li>
          </ul>
        </section>
      </main>
    </section>
  );
};

export default CataloguePage;
