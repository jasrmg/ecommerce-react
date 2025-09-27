import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Header } from "../../components/Header";
import "./TrackingPage.css";

export const TrackingPage = ({ cart }) => {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`
      );
      setOrder(response.data);
    };
    fetchTrackingData();
  }, [orderId]);

  if (!order) {
    return null;
  }

  const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />
      <title>Tracking</title>

      <Header />

      <div class="tracking-page">
        <div class="order-tracking">
          <Link class="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div class="delivery-date">
            Arriving on{" "}
            {dayjs(orderProduct.estimateDeliveryTimeMs).format("dddd, MMMM D")}
          </div>

          <div class="product-info">{orderProduct.product.name}</div>

          <div class="product-info">Quantity: {orderProduct.quantity}</div>

          <img class="product-image" src={orderProduct.product.image} />

          <div class="progress-labels-container">
            <div class="progress-label">Preparing</div>
            <div class="progress-label current-status">Shipped</div>
            <div class="progress-label">Delivered</div>
          </div>

          <div class="progress-bar-container">
            <div class="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};
