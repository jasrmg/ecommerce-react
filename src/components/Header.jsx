import { useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router";
import "./Header.css";
import cartIcon from "../assets/images/icons/cart-icon.png";
import searchIcon from "../assets/images/icons/search-icon.png";
import logoWhite from "../assets/images/logo-white.png";

export const Header = ({ cart }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const searchText = searchParams.get("search");

  const [search, setSearch] = useState(searchText || "");

  const updateSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const searchProduct = () => {
    console.log(search);

    navigate(`/?search=${search}`);
  };

  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={logoWhite} />
          <img className="mobile-logo" src={logoWhite} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          onChange={updateSearchInput}
          value={search}
        />

        <button className="search-button" onClick={searchProduct}>
          <img className="search-icon" src={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
};
