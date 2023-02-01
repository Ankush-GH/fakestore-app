import React from "react";

import "./NewElectronics.css";
import Card from "../../../ui/card/Card";
import { apiForElectronics, fetchData } from "../../../utils/FetchData";
import Loader from "../../../ui/loader/Loader";

const NewElectronics = () => {
  const [electronicsProducts, setElectronicsProducts] = React.useState([]);

  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    const getProducts = async () => {
      setLoader(true);
      const electronic = await fetchData(apiForElectronics);
      setElectronicsProducts(electronic);
      setLoader(false);
    };

    getProducts();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="app__electronics flex__center">
          <h4 className="main-mainheader">Electronics Products</h4>
          <div className="products flex__center">
            {electronicsProducts.map((elec) => (
              <Card Electronics={elec} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NewElectronics;
