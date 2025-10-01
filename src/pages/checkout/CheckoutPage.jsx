import { useState, useEffect } from "react";
import axios from "axios";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

import "./CheckoutPage.css";

export const CheckoutPage = ({ cart, loadCart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(response.data);
      response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    fetchCheckoutData();
  }, [cart]);

  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <CheckoutHeader totalQuantity={totalQuantity} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            deliveryOptions={deliveryOptions}
            cart={cart}
            loadCart={loadCart}
          />

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
};
