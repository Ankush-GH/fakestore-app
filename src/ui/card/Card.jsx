import React from "react";
import { BsDashLg } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ AllProducts, Mens, Womens, Jewelery, Electronics }) => {
  return (
    <>
      {AllProducts && (
        <div className="card p__acme" key={AllProducts.id}>
          <img
            className="card-img"
            src={AllProducts.image}
            alt="restuarentImage"
          />
          <h5 className="card-header">{AllProducts.title}</h5>
          {/* <Link
            to={`/productdetail/${AllProducts.id}`}
            className="card-mobile_button"
          ></Link> */}
          <div className="card-intro">
            <p className="card-p">&#36; {AllProducts.price}</p>
            <p className="card-p">
              Ratings <BsDashLg /> &nbsp; &nbsp; <FaStarHalfAlt />{" "}
              {AllProducts.rating.rate}
            </p>
            <p className="card-p">
              Category <BsDashLg /> {AllProducts.category}
            </p>
            <Link className="card-link" to={`/productdetail/${AllProducts.id}`}>
              Checkout
            </Link>
          </div>
        </div>
      )}
      {Mens && (
        <div className="card p__acme" key={Mens.id}>
          <img className="card-img" src={Mens.image} alt="restuarentImage" />
          <h5 className="card-header">{Mens.title}</h5>
          <div className="card-intro">
            <p className="card-p">&#36; {Mens.price}</p>
            <p className="card-p">
              Ratings <BsDashLg /> &nbsp; &nbsp; <FaStarHalfAlt />{" "}
              {Mens.rating.rate}
            </p>
            <p className="card-p">
              Category <BsDashLg /> {Mens.category}
            </p>
            <Link className="card-link" to={`/productdetail/${Mens.id}`}>
              Checkout
            </Link>
          </div>
        </div>
      )}
      {Womens && (
        <div className="card p__acme" key={Womens.id}>
          <img className="card-img" src={Womens.image} alt="restuarentImage" />
          <h5 className="card-header">{Womens.title}</h5>
          <div className="card-intro">
            <p className="card-p">&#36; {Womens.price}</p>
            <p className="card-p">
              Ratings <BsDashLg /> &nbsp; &nbsp; <FaStarHalfAlt />{" "}
              {Womens.rating.rate}
            </p>
            <p className="card-p">
              Category <BsDashLg /> {Womens.category}
            </p>
            <Link className="card-link" to={`/productdetail/${Womens.id}`}>
              Checkout
            </Link>
          </div>
        </div>
      )}
      {Jewelery && (
        <div className="card p__acme" key={Jewelery.id}>
          <img
            className="card-img"
            src={Jewelery.image}
            alt="restuarentImage"
          />
          <h5 className="card-header">{Jewelery.title}</h5>
          <div className="card-intro">
            <p className="card-p">&#36; {Jewelery.price}</p>
            <p className="card-p">
              Ratings <BsDashLg /> &nbsp; &nbsp; <FaStarHalfAlt />{" "}
              {Jewelery.rating.rate}
            </p>
            <p className="card-p">
              Category <BsDashLg /> {Jewelery.category}
            </p>
            <Link className="card-link" to={`/productdetail/${Jewelery.id}`}>
              Checkout
            </Link>
          </div>
        </div>
      )}
      {Electronics && (
        <div className="card p__acme" key={Electronics.id}>
          <img
            className="card-img"
            src={Electronics.image}
            alt="restuarentImage"
          />
          <h5 className="card-header">{Electronics.title}</h5>
          <div className="card-intro">
            <p className="card-p">&#36; {Electronics.price}</p>
            <p className="card-p">
              Ratings <BsDashLg /> &nbsp; &nbsp; <FaStarHalfAlt />{" "}
              {Electronics.rating.rate}
            </p>
            <p className="card-p">
              Category <BsDashLg /> {Electronics.category}
            </p>
            <Link className="card-link" to={`/productdetail/${Electronics.id}`}>
              Checkout
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
