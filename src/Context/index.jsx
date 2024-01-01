import React from "react";

const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);
  const [productToShow, setProductToShow] = React.useState({});
  const [cartProducts, setCartProducts] = React.useState([]);
  const [order, setOrder] = React.useState([]);
  const [sideMenuContent, setSideMenuContent] = React.useState({
    title: "Detail",
    name: "detail",
  });

  const closeSideMenu = () => setIsSideMenuOpen(false);
  const openSideMenu = () => setIsSideMenuOpen(true);

  // Get data

  const [items, setItems] = React.useState(null);
  React.useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  // Input para buscar productos
  const [searchByTitle, setSearchByTitle] = React.useState(null);
  const [filteredItems, setFilteredItems] = React.useState(null);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  React.useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    }
  }, [items, searchByTitle]);

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
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext };
