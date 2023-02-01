import React from "react";

import ImageSection1 from "../imagesection1/ImageSection1";
import ImageSection2 from "../imagesection2/ImageSection2";
import { apiForAllProducts, fetchData } from "../../utils/FetchData";
import Card from "../../ui/card/Card";
import "./NewMain.css";
import Loader from "../../ui/loader/Loader";

const NewMain = () => {
  const [products, setProducts] = React.useState([]);

  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    const getProducts = async () => {
      setLoader(true);
      const allProducts = await fetchData(apiForAllProducts);
      setProducts(allProducts);
      setLoader(false);
    };

    getProducts();
  }, []);

  console.log(products);

  return (
    <>
      <ImageSection1 />
      {loader ? (
        <Loader />
      ) : (
        <div className="app__main flex__center">
          <h4 className="main-mainheader">Checkout Products in Stock</h4>
          <div className="products flex__center">
            {products.map((allprod) => (
              <Card AllProducts={allprod} />
            ))}
          </div>
        </div>
      )}
      <ImageSection2 />
    </>
  );
};

export default NewMain;
