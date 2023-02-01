import axios from "axios";

// api for all products
export const apiForAllProducts = "https://fakestoreapi.com/products";

// api for mens
export const apiForMens =
  "https://fakestoreapi.com/products/category/men's clothing";

// api for womens
export const apiForWomens =
  "https://fakestoreapi.com/products/category/women's clothing";

// api for jewelery
export const apiForJewelery =
  "https://fakestoreapi.com/products/category/jewelery";

// api for electronics
export const apiForElectronics =
  "https://fakestoreapi.com/products/category/electronics";

export const fetchData = async (url) => {
  const data = await axios.get(url);
  return data.data;
};
