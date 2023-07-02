import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Products from "../components/Products";

const Home = () => {
  const response = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(response.data);
  }, [response]);

  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
