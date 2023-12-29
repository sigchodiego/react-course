import React from "react";

const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);
  const [productToShow, setProductToShow] = React.useState({});
  const [cartProducts, setCartProducts] = React.useState([]);
  const [sideMenuContent, setSideMenuContent] = React.useState({
    title: "Detail",
    name: "detail",
  });

  const closeSideMenu = () => setIsSideMenuOpen(false);
  const openSideMenu = () => setIsSideMenuOpen(true);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isSideMenuOpen,
        closeSideMenu,
        openSideMenu,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        sideMenuContent,
        setSideMenuContent,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext };
