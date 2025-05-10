import { useContext, useState } from "react";
import { BagContext } from "../appContext";

export default function Item({ product }) {
  const { bag, setBag } = useContext(BagContext);
  // const [ quantity, setQuantity ] = useState({ quantity: product.quantity, isValid: true });
  const [isValidInput, setIsValidInput] = useState(true);
  console.log("Is valud:", isValidInput);
  console.log("Bag in item: ", bag);
  console.log(typeof product.quantity);
  console.log("Quantity: ", product.quantity);
  //console.log("is valid", isValidInput);

  // If the change in the input box is not a valid number,
  // quantity in bag context should stay the same as before,
  // and no price calculations should be made.

  // Valid number is [1-100]. A check should be done.

  // bag.quantity should be of type number.
  // function handleChange(newQuantity) {
  //     console.log("handlechange");
  //     // if (isNaN(newQuantity) || typeof(newQuantity) !== "number") {
  //     //     setIsValidInput(false);
  //     // }
  //     // else {
  //         setIsValidInput(true);
  //         setBag( bag.map(item => {
  //             if (item.id === product.id) {
  //                 console.log("Item", item);
  //                 console.log("Product", product);
  //                 console.log("Quantity", newQuantity);
  //                 return { ...item, quantity: newQuantity}
  //             } else {
  //                 return item;
  //             }
  //         })
  //         );
  //     // }

  // }

  // function handleChange(inputQuantity) {
  //     if (isValidQuantity(inputQuantity)) {
  //         setQuantity({quantity: inputQuantity, isValid: true});
  //         setBag( bag.map(item => {
  //                         if (item.id === product.id) {
  //                             console.log("Item", item);
  //                             console.log("Product", product);
  //                             console.log("Quantity", inputQuantity);
  //                             return { ...item, quantity: inputQuantity}
  //                         } else {
  //                             return item;
  //                         }
  //                     }));
  //     }
  //     else {
  //         setQuantity({quantity: inputQuantity, isValid: false});

  //     }
  // }

  function handleChange(inputQuantity) {
    setIsValidInput(isValidQuantity(inputQuantity));
    setBag(
      bag.map((item) => {
        if (item.id === product.id) {
          console.log("Item", item);
          console.log("Product", product);
          console.log("Quantity", inputQuantity);
          return { ...item, quantity: inputQuantity };
        } else {
          return item;
        }
      })
    );
  }

  function isValidQuantity(value) {
    value = Number(value);
    console.log("Value", value);
    return Number.isInteger(value) && value > 0 && value < 101;
  }

  function handleRemove() {
    setBag(bag.filter((item) => item.id !== product.id));
  }

  return (
    <>
      <div className="mb-4 flex gap-2 md:flex-row">
        <img
          className="w-30 h-30 lg:min-h-45 lg:min-w-80 mr-2 bg-gray-100 rounded object-scale-down"
          src={product.image}
          alt={product.title}
        />

        <div className="flex flex-col justify-between pb-2 lg:pl-15 lg:py-2">
          <div className="text-lg">{product.title}</div>
          <p className={isValidInput ? "invisible" : "text-red-700"}>
            Please enter a number between 1 to 100.
          </p>

          <div className="flex max-w-[8rem] items-center">
            <button
              id="decrement-btn"
              className="h-10 rounded-s-lg  bg-gray-100 p-3 hover:bg-gray-200"
              onClick={() => handleChange(product.quantity - 1)}
            >
              <svg
                className="h-2 w-2 text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              id="quantity-input"
              className="m-0.5 block h-10 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              value={product.quantity}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button
              type="button"
              id="increment-btn"
              className="h-10 rounded-e-lg bg-gray-100 p-3 hover:bg-gray-200"
              onClick={() => handleChange(product.quantity + 1)}
            >
              <svg
                className="h-2 w-2 text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between pb-2 lg:min-w-30 lg:py-2">
          <div className="text-right text-lg">$ {product.price}</div>
          <button
            className="pb-0.5 cursor-pointer lg:max-w-20 self-end flex items-center justify-center gap-1.5"
            onClick={handleRemove}
          >
            <svg

              fill="#144667"
              height="20px" 
              width="20px" 
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 460.775 460.775"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>
              </g>
            </svg>
            Remove
          </button>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-300 mb-4"></div>
    </>
  );
}
