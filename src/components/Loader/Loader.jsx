import { Puff } from "react-loader-spinner";
import css from "./loader.module.css";
const Loader = () => {
  return (
    <div className={css.loader}>
      <Puff
        visible={true}
        height="120"
        width="120"
        color="var(--golden-yellow)"
        ariaLabel="puff-loading"
      />
    </div>
  );
};

export default Loader;
