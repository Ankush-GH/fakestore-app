import React, { useState, useEffect } from "react";

import "./Main.scss";
import ProductItem from "./productitem/ProductItem";

const apiForAll = "https://fakestoreapi.com/products";

const Main = () => {
  // TO MANAGE THE PRODUCTS
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);

  const getProducts = () => {
    setLoading(true);
    fetch(apiForAll)
      .then((res) => res.json())
      .then((resData) => {
        setProducts(resData);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <>
      {Loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="main">
          <div className="header">
            <span>Checkout Products In-Stock</span>
          </div>

          <div className="products">
            {products.map((product) => {
              return <ProductItem key={product.id} product={product} />;
            })}
          </div>

          <div className="footer">
            <h3>&copy; FakeStore</h3>
            <span>All Rights Reserved</span>
            <span>
              For complaints regarding products call us on : +1 5254 6464
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
