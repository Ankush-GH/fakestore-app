import React from "react";

import Form2 from "../../ui/form2/Form2";
import "./Complaints.css";

const Complaints = () => {
  return (
    <div className="app__complaints flex__center">
      <h4 style={{ margin: "1rem" }} className="font_head">
        Complaints regarding our services{" "}
      </h4>
      <Form2 />
    </div>
  );
};

export default Complaints;
