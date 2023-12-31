import React from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";

function MyOrder() {
  const context = React.useContext(ShoppingCartContext);
  const currentOrder =
    context.order.length > 0 ? context.order.slice(-1) : null;
  console.log(currentOrder);
  return (
    currentOrder && (
      <Layout>
        <section className="flex-1">
          {currentOrder[0].products.map((product) => (
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
    )
  );
}

export default MyOrder;
