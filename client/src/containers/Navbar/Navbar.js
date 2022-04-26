import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FETCH_CHECKOUT_COUNT_ERROR } from "../../constants/constants";
import "./Navbar.css";

const Navbar = ({ checkoutCount }) => {
  const [hello, setHello] = useState("Hello");

  return (
    <nav className="navbar">
      <div className="navbar-home-link">
        <NavLink exact to="/">
          {hello}
          Hardware Handler
          <FontAwesomeIcon className="navbar-icon" icon={faTools} />
        </NavLink>
      </div>
      <span className="navbar-links-wrapper">
        <NavLink exact to="/my-products">
          My Products
        </NavLink>
        <NavLink exact to="/new-product-form">
          Add New Products
        </NavLink>
        <NavLink className="navbar-link" exact to="/checkout">
          Checkout
          <FontAwesomeIcon className="navbar-icon" icon={faShoppingCart} />
          {checkoutCount !== FETCH_CHECKOUT_COUNT_ERROR && checkoutCount > 0 ? (
            <p className="navbar-checkout-count">: {checkoutCount}</p>
          ) : null}
        </NavLink>
      </span>
    </nav>
  );
};

export default Navbar;
