const renderIcon = () => { 
    return (<div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
          onClick={() => addProductsToCart(data.data)}
        >
          <PlusIcon className="size-3 text-black" />
        </div>);
}

export renderIcon{}