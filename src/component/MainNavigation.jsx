import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}></Link>Home
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
