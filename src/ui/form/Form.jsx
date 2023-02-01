import React from "react";

import "./Form.css";

const Form = () => {
  return (
    <div className="app__form flex__center">
      <input
        className="email-input"
        type="email"
        id="email"
        name="email"
        placeholder="Enter Your Email"
      />
      <button className="email-button" type="submit">
        Submit
      </button>
    </div>
  );
};

export default Form;
