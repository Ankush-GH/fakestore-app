import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import "./Electronics.scss";

const Electronics = () => {
  const [electronics, setElectronics] = useState([]);
  const [Loading, setLoading] = useState(false);

  const getElectronics = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((resData) => {
        setElectronics(resData);
        setLoading(false);
      });
  };

  useEffect(() => {
    getElectronics();
  }, []);

  return (
    <>
      {Loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="electronics">
          {electronics.map((product) => (
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

export default Electronics;
