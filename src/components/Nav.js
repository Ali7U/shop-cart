import React from "react";
import { FaTshirt } from "react-icons/fa";

function Nav(props) {
  const {countCart} = props
  return (
    <nav>
      <div className="icons">
        <h2>Shopping {<FaTshirt />} </h2>
      </div>
      <div className="list">
        <ul>
          <li>home</li>
          <li>cart {countCart}</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
