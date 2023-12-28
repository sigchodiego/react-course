import { ShoppingCartContext } from "../../Context";
import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const context = React.useContext(ShoppingCartContext);

  return (
    <nav className="w-full top-0 flex items-center justify-between fixed z-10 text-sm font-light py-5 px-8">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li className="flex align-center">
          <NavLink to="/clothes">Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/electronics">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/furnitures">Furnitures</NavLink>
        </li>
        <li>
          <NavLink to="/toys">Toys</NavLink>
        </li>
        <li>
          <NavLink to="/others">Others</NavLink>
        </li>
      </ul>

      <ul className="flex align-center gap-3">
        <li>sigchodiego@gmail.com</li>
        <li>
          <NavLink to="/my-orders">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="#">🛒 {context.count}</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
