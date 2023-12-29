import { ShoppingCartContext } from "../../Context";
import React from "react";
import { DetailCard } from "./DetailCard";
import { OrderCard } from "./OrderCard";

const SideMenu = (content) => {
  const context = React.useContext(ShoppingCartContext);
  const showDetail = context.isSideMenuOpen ? "right-0" : "-right-96";

  const sideMenuContent = {
    detail: <DetailCard />,
    cart: <OrderCard />,
  };

  return (
    //context.isSideMenuOpen && (
    <aside
      className={`w-[360px] flex flex-col fixed bg-white border border-black rounded rounded-l h-[calc(100vh-68px)] top-[68px] transition ease-in-out duration-200 ${showDetail}`}
    >
      {sideMenuContent[content.content.name]}
    </aside>
    //)
  );
};

export { SideMenu };
