import { useContext, useState } from "react";
import { BagContext } from "../appContext";


export default function Item({ product }) {
    const { bag, setBag } = useContext(BagContext);
    // const [ quantity, setQuantity ] = useState({ quantity: product.quantity, isValid: true });
    const [isValidInput, setIsValidInput]  = useState(true);
    console.log("Is valud:", isValidInput);
    console.log("Bag in item: ", bag);
    console.log(typeof(product.quantity));
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
        setBag( bag.map(item => {
            if (item.id === product.id) {
                console.log("Item", item);
                console.log("Product", product);
                console.log("Quantity", inputQuantity);
                return { ...item, quantity: inputQuantity}
            } else {
                return item;
            }
        }));
    }

    function isValidQuantity(value) {
        value = Number(value);
        console.log("Value", value);
        return Number.isInteger(value) && value > 0 && value < 101;
    }

    function handleRemove() {
        setBag(bag.filter(item => item.id !== product.id));
    }


  return (
    <>
      <div className="mb-4 flex justify-between gap-2">
        <div className="max-h-80 min-h-40 max-w-80 min-w-40 flex-auto bg-yellow-100 mr-2"></div>
        <div className="flex flex-col justify-between pb-2">
          <div className="text-lg">{product.title}</div>

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
              onChange={e => handleChange(e.target.value)}
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
          <p className={ isValidInput ? "invisible" : "text-red-700"}>Please enter a number between 1 to 100.</p>
        </div>
        <div className="flex flex-col justify-between pb-2">
          <div className="text-right text-lg">$ {product.price}</div>
          <button className="border-b-1 pb-0.5 cursor-pointer" onClick={handleRemove}>X Remove</button>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-300 mb-4"></div>
    </>
  );
}
