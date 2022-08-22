import React from "react";
import { Link } from "react-router-dom";

import "./ProductItem.scss";

const ProductItem = ({ product }) => {
  return (
    <div className="card shadow">
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="title card-title">{product.title}</h5>

        <h5 className="price">&#36; - {product.price}
        </h5>

        <h6 className="rating">⭐{product.rating.rate}</h6>

        <Link className="link btn btn-primary" to={`/productdetail/${product.id}`}>
          Check Out
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
