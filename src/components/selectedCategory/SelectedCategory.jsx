import React from "react";
import { Link } from "react-router-dom";
import { BsDashLg } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { GiJewelCrown } from "react-icons/gi";

import "./SelectedCategory.css";

const SelectedCategory = () => {
  return (
    <div className="app__selectedcategory flex__center">
      <h4 className="category-mainheader">Select From Categories</h4>
      &nbsp;
      <BsDashLg className="dash" />
      &nbsp;
      <Link className="cats" to="/mens">
        Mens &nbsp;
        <FaMale className="cat-icons" />
      </Link>
      <Link className="cats" to="/womens">
        Womens &nbsp;
        <FaFemale className="cat-icons" />
      </Link>
      <Link className="cats" to="/jewelery">
        Jewelery &nbsp;
        <GiJewelCrown className="cat-icons" />
      </Link>
      <Link className="cats" to="/electronics">
        Electronics &nbsp;
        <GiElectric className="cat-icons" />
      </Link>
    </div>
  );
};

export default SelectedCategory;
