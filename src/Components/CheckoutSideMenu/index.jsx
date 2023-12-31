import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import React from "react";

const CheckoutSideMenu = () => {
  const context = React.useContext(ShoppingCartContext);
  const showDetail = context.isCheckoutSideMenuOpen ? "right-0" : "-right-96";

  return (
    <aside
      className={`w-[360px] flex flex-col fixed bg-white border border-black rounded rounded-l h-[calc(100vh-68px)] top-[68px] transition ease-in-out duration-200 ${showDetail}`}
    >
      <header className="px-6 py-2 flex items-center justify-between">
        <h2 className="font-bold text-xl">Checkout</h2>
        <XMarkIcon
          className="size-6 text-black"
          onClick={context.closeSideMenu}
        />
      </header>
      <figure className="px-6">
        <img
          className="rounded-lg"
          src={context.productToShow.images}
          alt={context.productToShow.title}
        />
        <span className="text-2xl font-semibold block my-2">
          $ {context.productToShow.price}
        </span>
        <h3 className="font-medium text-xl">{context.productToShow.title}</h3>
        <p className="font-light text-md">
          {context.productToShow.description}
        </p>
      </figure>
    </aside>
    //)
  );
};

export { CheckoutSideMenu };
