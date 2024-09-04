import { useState } from "react";
import css from "./CamperForm.module.css";
import toast from "react-hot-toast";
import RedButton from "../RedButton/RedButton";

const CamperForm = () => {
  const [value, setValue] = useState("");

  const onHandleBlur = (event) => {
    if (!event.target.value) {
      event.target.type = "text";
    }
  };

  const onHandleFocus = (event) => {
    event.target.type = "date";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Booking created successfully");
    event.target.reset();
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.formContainer}>
      <input type="text" placeholder="Name*" className="inputField" required />
      <input
        type="email"
        placeholder="Email*"
        className="inputField"
        required
      />
      <input
        type={value ? "date" : "text"}
        id="bookingDate"
        className="inputField"
        onFocus={onHandleFocus}
        onBlur={onHandleBlur}
        name="bookingDate"
        placeholder="Booking date*"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <textarea
        name="comment"
        id="comment"
        className={`inputField ${css.comment}`}
        placeholder="Comment"
      ></textarea></div>
      <RedButton addClass={css.sendBtn}>Send</RedButton>
    </form>
  );
};

export default CamperForm;
