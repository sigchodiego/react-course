import {
  ChevronDoubleRightIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";

function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="flex justify-between items-center mb-3 border rounded-lg py-2 px-6 mt-2 hover:shadow hover:shadow-xl">
      <p className="">
        <span className="block">Fecha: 01.02.2023</span>
        <span>Productos: {totalProducts}</span>
      </p>
      <span className="font-semibold block ml-6 text-2xl">
        Total: ${totalPrice}
      </span>
      <ChevronDoubleRightIcon className="size-5 ml-6" />
    </div>
  );
}

export { OrdersCard };
