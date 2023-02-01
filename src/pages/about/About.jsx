import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

import clothing1 from "../../assets/clothing1.jpg";
import clothing2 from "../../assets/clothing2.jpg";
import clothing3 from "../../assets/clothing3.jpg";
import clothing4 from "../../assets/clothing4.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="app__about flex__center section_margin-top">
      <h3 className="about-mainheader font_head">
        We are the best Shopping App
      </h3>
      <div className="images flex__center">
        <img className="about-images" src={clothing1} alt="clothes" />
        <img className="about-images" src={clothing2} alt="clothes" />
        <img className="about-images" src={clothing3} alt="clothes" />
        <img className="about-images" src={clothing4} alt="clothes" />
      </div>
      <h2 className="about-sec_header font_head">About Our Offers and Deals</h2>
      <h3 className="grey-bg font_base">
        <GoPrimitiveDot />
        Get The Lastest Fashionable
        <br />
        <GoPrimitiveDot />
        Clothes on the best Prices,
        <br />
        <GoPrimitiveDot />
        Best Aplliances With Gaurentee
        <br />
        <GoPrimitiveDot />
        Accessories for Men and Women
        <br />
        <GoPrimitiveDot />
        Electronics at Lowest Prices
      </h3>
    </div>
  );
};

export default About;
