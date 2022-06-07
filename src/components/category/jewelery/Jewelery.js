import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import "./Jewelery.scss";

const Jewelery = () => {
  const [jewelery, setJewelery] = useState([]);
  const [Loading, setLoading] = useState(false);

  const getJewelery = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((resData) => {
        setJewelery(resData);
        setLoading(false);
      });
  };

  useEffect(() => {
    getJewelery();
  }, []);

  return (
    <>
      {Loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="jewelery">
          {jewelery.map((product) => (
            <div className="productitem">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />

              <div className="productinfo">
                <Link className="link" to={`/productdetail/${product.id}`}>
                  {product.title}
                </Link>
                <span>${product.price}</span>
                <span className="rating">⭐{product.rating.rate}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="footer">
        <NavLink to="/" className="btn">
          <AiFillHome />
        </NavLink>
      </div>
    </>
  );
};

export default Jewelery;
