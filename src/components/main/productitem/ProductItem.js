import React from "react";
import { Link } from "react-router-dom";

import "./ProductItem.scss";

const ProductItem = ({ product }) => {
  return (
    <div className="productitem">
      <img src={product.image} className="card-img-top" alt={product.title} />

      <div className="productinfo">
        <Link className="link" to={`/productdetail/${product.id}`}>
          {product.title}
        </Link>
        <span>${product.price}</span>
        <span className="rating">⭐{product.rating.rate}</span>
      </div>
    </div>
  );
};

export default ProductItem;
