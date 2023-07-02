import axios from "axios";
const productsData = async () => {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );

  return products;
};

export default productsData;
