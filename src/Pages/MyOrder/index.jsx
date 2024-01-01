import React from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";

function MyOrder() {
  const context = React.useContext(ShoppingCartContext);

  let currentPath = window.location.pathname;
  let index = currentPath.split("/");
  console.log(index);
  console.log(context.order);
  const currentOrder =
    (context.order.length > 0 && index[index.length - 1]) == "last"
      ? context.order.slice(-1)[0]
      : context.order[Number(index[index.length - 1])];
  console.log("Orden actual: ", currentOrder);
  return (
    <Layout>
      <section className="flex-1">
        {currentOrder.products.map((product) => (
          <figure
            key={product.id}
            className="px-6 flex gap-3 items-center justify-between border-b-2 border-gray-300/25 py-3"
          >
            <img
              className="rounded-lg size-14 object-cover border border-2"
              src={product.images[0]}
              alt={product.title}
            />
            <h3 className="font-medium text-xl flex-1">{product.title}</h3>
            <span className="text-xl font-semibold block">
              $ {product.price}
            </span>
          </figure>
        ))}
      </section>
    </Layout>
  );
}

export default MyOrder;
