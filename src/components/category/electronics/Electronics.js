import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import axios from "axios"
import FadeLoader from "react-spinners/FadeLoader";
import "./Electronics.scss";
import { apiForAll } from "../../main/Main";

const Electronics = () => {
  const [electronics, setElectronics] = useState([]);
  const [loading, setLoading] = useState(false);

  const getElectronics = () => {
    setLoading(true);

    axios.get(apiForAll + "/category/electronics")
      .then(resData => {
        setElectronics(resData.data);
        setLoading(false);
      })
  };

  useEffect(() => {
    getElectronics();
  }, []);

  return (
    <>
      {loading ? (
        <FadeLoader style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} color={"black"} loading={loading} size={150} />
      ) : (
        <div className="electronics">
          {electronics.map((product) => (
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
