import React from "react";
import { Link } from "react-router-dom";

import "./Heading.scss";

const Heading = () => {
  return (
    <div className="heading">
      <div className="logo">
        <Link to="/" className="link">
          Fake Store
        </Link>
      </div>
    </div>
  );
};

export default Heading;
