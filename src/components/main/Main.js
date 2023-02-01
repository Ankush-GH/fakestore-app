import axios from "axios";
import React, { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import "./Main.scss";
import ProductItem from "./productitem/ProductItem";

export const apiForAll = "https://fakestoreapi.com/products";

const Main = () => {
  // TO MANAGE THE PRODUCTS
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    setLoading(true);

    axios.get(apiForAll)
      .then(resData => {
        setProducts(resData.data);
        setLoading(false);
      })
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <>
      {loading ? (
        <FadeLoader style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} color={"black"} loading={loading} size={150} />
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

        </div>
      )}
    </>
  );
};

export default Main;
