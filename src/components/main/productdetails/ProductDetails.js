import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import "./ProductDetails.scss";

const ProductDetails = () => {
  const { id } = useParams();

  const [ProductDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductDetails = () => {
      setLoading(true);
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((resData) => {
          setProductDetail(resData);
          setLoading(false);
        });
    };

    getProductDetails();
  }, []);

  console.log(ProductDetail);

  return (
    <>
      <div className="productdetails">
        {loading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <>
            <img src={ProductDetail.image} alt="image" />
            <div className="productinfo">
              <div className="title">{ProductDetail.title}</div>
              <div className="desc">
                <div className="icon">
                  <i
                    className="fa fa-info-circle"
                    style={{ "font-size": "24px" }}
                  ></i>
                </div>
                {ProductDetail.description}
              </div>
              <div className="price">$ {ProductDetail.price}</div>
              <div className="rating">
                ⭐{ProductDetail.rating && ProductDetail.rating.rate}
              </div>
              <div className="category">
                category-&nbsp;&nbsp;&nbsp;{ProductDetail.category}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="footer">
        <NavLink to="/" className="btn">
          <AiFillHome />
        </NavLink>
      </div>
    </>
  );
};

export default ProductDetails;
