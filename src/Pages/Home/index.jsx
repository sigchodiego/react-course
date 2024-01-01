import React from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { SideMenu } from "../../Components/SideMenu";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = React.useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        console.log(context.searchByTitle);
        console.log(context.filteredItems);
        return context.filteredItems?.map((item) => (
          <Card data={item} key={item.id} />
        ));
      } else {
        return <span>No hay resultados</span>;
      }
    } else {
      return context.items?.map((item) => <Card data={item} key={item.id} />);
    }
  };
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h2 className="font-medium text-2xl">Home</h2>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="border border-black rounded rounded-lg py-2 px-10 text-center mb-10"
        onChange={(event) => {
          context.setSearchByTitle(event.target.value);
          console.log("Escrito: ", context.searchByTitle);
        }}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <SideMenu content={context.sideMenuContent} />
    </Layout>
  );
}

export default Home;
