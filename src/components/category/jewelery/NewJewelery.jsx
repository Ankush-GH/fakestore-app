import React from "react";

import "./NewJewelery.css";
import Card from "../../../ui/card/Card";
import { apiForJewelery, fetchData } from "../../../utils/FetchData";
import Loader from "../../../ui/loader/Loader";

const NewJewelery = () => {
  const [jeweleryProducts, setJeweleryProducts] = React.useState([]);

  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    const getProducts = async () => {
      setLoader(true);
      const jewelery = await fetchData(apiForJewelery);
      setJeweleryProducts(jewelery);
      setLoader(false);
    };

    getProducts();
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="app__jewelery flex__center">
          <h4 className="main-mainheader">Jewelery Products</h4>
          <div className="products flex__center">
            {jeweleryProducts.map((jew) => (
              <Card Jewelery={jew} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NewJewelery;
