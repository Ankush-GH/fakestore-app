import React from "react";
import { Link } from "react-router-dom";

import Form from "../../ui/form/Form";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="footer-mainheader">FakeStore</div>

      <div className="footer-options">
        <div className="aboutus">
          <Link to="/about" className="footer-links link">
            About Us
          </Link>
          <span>Know more about us , what we do</span>
        </div>
        <div className="customercare">
          <h4 className="customercare-mainheader">Customer Care</h4>
          <Link to="/contactus" className="link">
            Contact Us
          </Link>
          <Link to="/complaints" className="link">
            Complaints
          </Link>
        </div>
        <div className="updates">
          <h4 className="updates-mainheader">Hear The Latest</h4>
          <span>(new products, exclusive offers and other surprise)</span>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Footer;
