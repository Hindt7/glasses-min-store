import { useContext } from "react";
import { BagContext } from "../appContext";

export default function ProductCard({ product }) {
  const { bag, setBag } = useContext(BagContext);

  function handleClick() {
    if (!bag.find((item) => item.id === product.id)) {
      setBag([
        ...bag,
        {
          id: product.id,
          title: product.title,
          image: product.thumbnail,
          price: product.price,
          quantity: 1,
        },
      ]);
    }
    console.log(bag);
  }

  return (
    <>
      <div className="min-h-75 bg-white">
        <img className="h-3/4" src={product.thumbnail} alt={product.title} />
        <div className="min-h-10 grid grid-rows-2 grid-cols-3 gap-3 px-5 py-1.5">
          <div className="col-span-2 row-span-2 ">{product.title}</div>
          <div className="cols-span-1 row-span-1 text-right">
            ${product.price}
          </div>
          {bag.length > 0 && bag.find((item) => item.id === product.id) ? (
            <AddedIndicator />
          ) : (
            <AddButton clickHandler={handleClick} />
          )}
        </div>
      </div>
    </>
  );
}

// button to be shown when item is not in the bag
function AddButton({ clickHandler }) {
  return (
    <>
      <button
        className="cols-span-1 row-span-1 text-right cursor-pointer"
        onClick={clickHandler}
      >
        + Add
      </button>
    </>
  );
}

// component to replace 'addbutton' when product is already in the bag
function AddedIndicator() {
  return (
    <>
      <div className="cols-span-1 row-span-1 text-right">✓ Added</div>
    </>
  );
}
