import { Fragment } from "react";
import { Link } from "react-router";
import axios from "axios";
import dayjs from "dayjs";
import buyAgain from "../../assets/images/icons/buy-again.png";

export const OrderDetailsGrid = ({ order, loadCart }) => {
  return (
    <div className="order-details-grid">
      {order.products.map((product) => {
        const addToCart = async () => {
          console.log("processing");
          await axios.post("/api/cart-items", {
            productId: product.product.id,
            quantity: 1,
          });
          console.log("clicked");
          await loadCart();
        };

        return (
          <Fragment key={product.productId}>
            <div className="product-image-container">
              <img src={product.product.image} />
            </div>

            <div className="product-details">
              <div className="product-name">{product.product.name}</div>
              <div className="product-delivery-date">
                Arriving on:{" "}
                {dayjs(product.estimatedDeliveryTimeMs).format("MMMM D")}
              </div>
              <div className="product-quantity">
                Quantity: {product.quantity}
              </div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src={buyAgain} />
                <span className="buy-again-message" onClick={addToCart}>
                  Add to Cart
                </span>
              </button>
            </div>

            <div className="product-actions">
              <Link to={`/tracking/${order.id}/${product.productId}`}>
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </Link>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
