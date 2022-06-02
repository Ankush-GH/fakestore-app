import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="categories">
        <NavLink className="navlink" activeClassName="active" to="/mens">
          men's clothing
        </NavLink>
        <NavLink className="navlink" activeClassName="active" to="/jewelery">
          jewelery
        </NavLink>
        <NavLink className="navlink" activeClassName="active" to="/electronics">
          electronics
        </NavLink>
        <NavLink className="navlink" activeClassName="active" to="/womens">
          women's clothing
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
