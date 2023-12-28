import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import React from "react";

const ProductDetail = () => {
  const context = React.useContext(ShoppingCartContext);
  const showDetail = context.isProductDetailOpen ? "right-0" : "-right-96";

  return (
    //context.isProductDetailOpen && (
    <aside
      className={`w-[360px] flex flex-col fixed bg-white border border-black rounded rounded-l h-[calc(100vh-68px)] top-[68px] transition ease-in-out duration-200 ${showDetail}`}
    >
      <header className="px-6 py-2 flex items-center justify-between">
        <h2 className="font-bold text-xl">Detail</h2>
        <XMarkIcon
          className="size-6 text-black"
          onClick={context.closeProductDetail}
        />
      </header>
    </aside>
    //)
  );
};

export { ProductDetail };
