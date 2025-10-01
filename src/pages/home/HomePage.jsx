import axios from "axios";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";

export const HomePage = ({ cart, loadCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // using axios
    // axios.get("/api/products").then((response) => {
    //   setProducts(response.data);
    // });

    // using axios with async await - create a functio and then call it
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
};
