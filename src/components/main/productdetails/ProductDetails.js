import React, { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import axios from "axios"
import { IoInformationCircleSharp } from "react-icons/io5"
import { useParams } from "react-router-dom";

import "./ProductDetails.css";
import Loader from "../../../ui/loader/Loader";

const ProductDetails = () => {

  const { id } = useParams()

  const [ProductDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductDetails = () => {
      setLoading(true);

      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(resData => {
          setProductDetail(resData.data);
          setLoading(false);
        })
    };

    getProductDetails();
  }, []);

  console.log(ProductDetail);

  return (
    <>
      <div className="productdetails">
        {loading ? (
          <Loader />
        ) : (
          <>
            <img className="productinfo-image" src={ProductDetail.image} alt="details" />
            <div className="productinfo">
              <div className="productinfo-header">
                {ProductDetail.title}
              </div>
              <div className="productinfo-desc">
                <IoInformationCircleSharp className="info-icon" />
                {ProductDetail.description}
              </div>
              <div className="productinfo-rating">
                ⭐{ProductDetail.rating && ProductDetail.rating.rate}
              </div>
              <div className="productinfo-category">
                category-&nbsp;&nbsp;&nbsp;{ProductDetail.category}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
