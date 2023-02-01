import React from "react";
import Card from "../../../ui/card/Card";
import Loader from "../../../ui/loader/Loader";
import { apiForMens, fetchData } from "../../../utils/FetchData";

import "./NewMens.css";

const NewMens = () => {
  const [mensProducts, setMensProducts] = React.useState([]);

  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    const getProducts = async () => {
      setLoader(true);
      const mens = await fetchData(apiForMens);
      setMensProducts(mens);
      setLoader(false);
    };

    getProducts();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="app__mens flex__center">
          <h4 className="main-mainheader">Mens Products</h4>
          <div className="products flex__center">
            {mensProducts.map((mens) => (
              <Card Mens={mens} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default NewMens;
