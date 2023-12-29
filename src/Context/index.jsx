import React from "react";

const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = React.useState(false);
  const [productToShow, setProductToShow] = React.useState({});
  const [cartProducts, setCartProducts] = React.useState([]);

  const closeProductDetail = () => setIsProductDetailOpen(false);
  const openProductDetail = () => setIsProductDetailOpen(true);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        closeProductDetail,
        openProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext };
