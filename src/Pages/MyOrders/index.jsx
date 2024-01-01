import React from "react";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = React.useContext(ShoppingCartContext);
  console.log(context.order);
  return (
    <Layout>
      My Orders
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
