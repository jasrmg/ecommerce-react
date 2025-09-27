import { Fragment } from "react";
import { Link } from "react-router";
import dayjs from "dayjs";
import buyAgain from "../../assets/images/icons/buy-again.png";

export const OrderDetailsGrid = ({ order }) => {
  return (
    <div className="order-details-grid">
      {order.products.map((product) => {
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
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <Link to="/tracking">
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
