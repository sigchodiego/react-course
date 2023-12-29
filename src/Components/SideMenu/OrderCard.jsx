import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import React from "react";

const OrderCard = () => {
  const context = React.useContext(ShoppingCartContext);
  const updateCart = (index) => {
    context.setCount(context.count - 1);
    context.cartProducts.splice(index, 1);
    context.setCartProducts(context.cartProducts);
  };

  return (
    <>
      <header className="px-6 pt-2 pb-6 flex items-center justify-between">
        <h2 className="font-bold text-xl">Checkout</h2>
        <XMarkIcon
          className="size-6 text-black"
          onClick={context.closeSideMenu}
        />
      </header>
      {context.cartProducts.map((cartProduct, index) => (
        <figure
          key={cartProduct.id}
          className="px-6 flex gap-3 items-center justify-between border-b-2 border-gray-300/25 py-3"
        >
          <img
            className="rounded-lg size-14 object-cover border border-2"
            src={cartProduct.images}
            alt={cartProduct.title}
          />
          <h3 className="font-medium text-xl flex-1">{cartProduct.title}</h3>
          <span className="text-xl font-semibold block">
            $ {cartProduct.price}
          </span>
          <XMarkIcon
            className="size-6 text-black fill-red-400 hover:fill-red-600 stroke-1 cursor-pointer"
            onClick={() => updateCart(index)}
          />
        </figure>
      ))}
    </>
  );
};

export { OrderCard };
