import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const context = React.useContext(ShoppingCartContext);

  const showCartContent = () => {
    context.setSideMenuContent({
      title: "Checkout",
      name: "cart",
    });
    context.openSideMenu();
  };

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(true);
  };

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
          <NavLink
            to="/clothes"
            onClick={() => {
              context.setSearchByCategory("clothes");
            }}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => {
              context.setSearchByCategory("electronics");
            }}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => {
              context.setSearchByCategory("furnitures");
            }}
          >
            Furnitures
          </NavLink>
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
          <NavLink to="/sign-in" onClick={() => handleSignOut()}>
            Sign Out
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="flex gap-2" onClick={showCartContent}>
            <ShoppingBagIcon className="size-5 text-black" /> {context.count}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
