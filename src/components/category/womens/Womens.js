import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import "./Womens.scss";

const Womens = () => {
  const [womens, setWomens] = useState([]);
  const [Loading, setLoading] = useState(false);

  const getWomens = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((resData) => {
        setWomens(resData);
        setLoading(false);
      });
  };

  useEffect(() => {
    getWomens();
  }, []);

  return (
    <>
      {Loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="womens">
          {womens.map((product) => (
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

export default Womens;
