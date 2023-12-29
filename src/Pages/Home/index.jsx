import React from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { SideMenu } from "../../Components/SideMenu";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const [items, setItems] = React.useState(null);
  const context = React.useContext(ShoppingCartContext);
  React.useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <SideMenu content={context.sideMenuContent} />
    </Layout>
  );
}

export default Home;
