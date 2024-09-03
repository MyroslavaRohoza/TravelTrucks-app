import css from "./CamperForm.module.css";

const CamperForm = () => {
  return (
    <form>
      <input type="text" placeholder="Name*" className="inputField" />
      <input type="email" placeholder="Email*" className="inputField" />
      <input type="date" placeholder="Booking date*" className="inputField" />
      <textarea
        name="comment"
        id="xomment"
        className="inputField"
        placeholder="Comment"
      ></textarea>
    </form>
  );
};

export default CamperForm;
