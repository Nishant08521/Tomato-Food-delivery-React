import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favourite food hear</h2>
        <p>
          Choose from a diverse menu featuring a deletable array of dishes
          crafted with the finest ingredents and culinary expertise.our mission
          is to satisfy your cravings and elevate your dining experiance,one
          delicious meal at the time.
        </p>
        <Link to="/">
          <button> View Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
