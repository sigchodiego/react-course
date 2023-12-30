import { ShoppingCartContext } from "../../Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

import React from "react";

const Card = (data) => {
  const context = React.useContext(ShoppingCartContext);
  const showProduct = (SideMenu) => {
    context.setSideMenuContent({
      title: "Detail",
      name: "detail",
    });
    context.openSideMenu();
    context.setProductToShow(SideMenu);
  };
  const addProductsToCart = (productData) => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex bg-green-400 justify-center items-center bg-white w-6 h-6 rounded-full m-2">
          <CheckIcon className="size-3 text-white " />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
          onClick={() => addProductsToCart(data.data)}
        >
          <PlusIcon className="size-3 text-black" />
        </div>
      );
    }
  };
  return (
    <div
      className="bg-white relative cursor-pointer w-56 h-60"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        />
      </figure>
      {renderIcon(data.data.id)}
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-sm font-medium">{data.data.price}</span>
      </p>
    </div>
  );
};

export { Card };
