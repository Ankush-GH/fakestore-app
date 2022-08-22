import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"
import "./Mens.scss";
import { apiForAll } from "../../main/Main";
import FadeLoader from "react-spinners/FadeLoader";
// import "../../main/productitem/ProductItem.scss"

const Mens = () => {
  const [mens, setMens] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMens = () => {
    setLoading(true);

    axios.get(apiForAll + "/category/men's clothing")
      .then(resData => {
        setMens(resData.data);
        setLoading(false);
      })
  };

  useEffect(() => {
    getMens();
  }, []);

  return (
    <>
      {loading ? (
        <FadeLoader style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} color={"black"} loading={loading} size={150} />
      ) : (
        <div className="mens">
          {mens.map((product) => (
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
          )
          )}
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

export default Mens;
