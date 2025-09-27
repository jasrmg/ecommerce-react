import { Fragment } from "react";
import { Link } from "react-router";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import buyAgain from "../../assets/images/icons/buy-again.png";

export const OrdersGrid = ({ orders }) => {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>{formatMoney(order.totalCostCents)}</div>
                </div>
              </div>

              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>{order.id}</div>
              </div>
            </div>

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
                        {dayjs(product.estimatedDeliveryTimeMs).format(
                          "MMMM D"
                        )}
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
          </div>
        );
      })}
    </div>
  );
};
