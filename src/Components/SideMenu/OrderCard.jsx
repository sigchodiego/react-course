import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import React from "react";
import totalPrice from "../../Utils";
import { Link } from "react-router-dom";

const OrderCard = () => {
  const context = React.useContext(ShoppingCartContext);
  const updateCart = (index) => {
    context.setCount(context.count - 1);
    context.cartProducts.splice(index, 1);
    context.setCartProducts(context.cartProducts);
  };

  const hendledCheckout = () => {
    const orderToAdd = {
      date: "01.02.2023",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
    context.closeSideMenu();
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
      <section className="flex-1">
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
      </section>
      <footer className="p-8 text-right font-semibold text-2xl">
        <p>Total: ${totalPrice(context.cartProducts)}</p>
        <Link to="my-orders/last">
          <button
            className="w-full bg-gray-900 rounded rounded-xl text-xl text-white py-3 px-5 mt-8 flex items-center justify-between"
            onClick={() => hendledCheckout()}
          >
            Checkout <ArrowRightIcon className="size-6 ml-3" />
          </button>
        </Link>
      </footer>
    </>
  );
};

export { OrderCard };
