import React from "react";
import Card from "../../../ui/card/Card";
import Loader from "../../../ui/loader/Loader";
import { apiForWomens, fetchData } from "../../../utils/FetchData";

import "./Womens.css";

const Womens = () => {
  const [womensProducts, setWomensProducts] = React.useState([]);

  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    const getProducts = async () => {
      setLoader(true);
      const womens = await fetchData(apiForWomens);
      setWomensProducts(womens);
      setLoader(false);
    };

    getProducts();
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="app__womens flex__center">
          <h4 className="main-mainheader">Womens Products</h4>
          <div className="products flex__center">
            {womensProducts.map((womens) => (
              <Card Womens={womens} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Womens;
