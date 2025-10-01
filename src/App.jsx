import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/tracking/TrackingPage";
import { NotfoundPage } from "./pages/notfound/NotfoundPage";

import "./App.css";

window.axios = axios;

function App() {
  // console.log(axios.post("/api/reset"));
  const [cart, setCart] = useState([]);

  // using axios with async await
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };
  useEffect(() => {
    // using axios
    // axios
    //   .get("/api/cart-items?expand=product")
    //   .then((response) => setCart(response.data));

    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} loadCart={loadCart} />}
      />
      <Route
        path="orders"
        element={<OrdersPage cart={cart} loadCart={loadCart} />}
      />
      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cart={cart} />}
      />

      <Route path="*" element={<NotfoundPage cart={cart} />} />
    </Routes>
  );
}

export default App;
