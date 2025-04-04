import Item from "./item";
import { useContext } from "react";
import { BagContext } from "../appContext";
import { Link } from "react-router-dom";

export default function ShoppingBag() {
  const { bag } = useContext(BagContext);
  console.log("Bag in shBag: ", bag);
  let readyToProceed = true;

  // const totalPrice = bag.reduce((acc, item) => acc + item.price, 0);

  const calculateTotalPrice = () => {
    let calPrice = 0;
    for (let i = 0; i < bag.length; i++) {
      if (bag[i].quantity > 0) {
        calPrice += bag[i].quantity * bag[i].price;
      } else {
        readyToProceed = false;
        return 0; // Exit early if any item's quantity is invalid
      }
    }
    readyToProceed = true;
    return calPrice;
  };

  function handleCheckout() {
    alert("We have received your order.\nThank you for stopping by. =)");
  }

  return (
    <>
      <div className="min-h-24 w-full pt-10 text-3xl mb-3 pl-16 lg:pl-50">
        Your bag
      </div>
      {bag.length > 0 ? (
        <div className="flex-none gap-14 px-10 lg:flex lg:flex-auto lg:flex-wrap lg:px-24 lg:justify-evenly">
          <div className="mb-10 min-w-110 pb-10 flex flex-col self-center max-w-180 flex-grow">
            {bag.map((item) => (
              <Item product={item} key={item.id} />
            ))}
          </div>

          <div className="h-75 min-w-70 max-w-50 flex-initial bg-amber-100 p-8 leading-10">
            <div className="mb-4 flex w-full justify-between text-xl">
              <div className="">Subtotal:</div>
              <div className="text-right">
                ${calculateTotalPrice().toFixed(2)}
              </div>
            </div>

            <div className="mb-8 leading-6">
              *Shipping calculated at checkout
            </div>

            <Link to={"../allproducts/"}>
              <button className="my-4 w-full cursor-pointer rounded-md border-2 border-black px-3 outline-offset-2 hover:outline-2">
                Continue shopping
              </button>
            </Link>
            <br />
            <button
              className="w-full cursor-pointer rounded-md border-2 border-black px-3 outline-offset-2 hover:outline-2 disabled:cursor-default disabled:border-gray-500 disabled:text-gray-500 disabled:outline-none"
              onClick={handleCheckout}
              disabled={!readyToProceed}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-2xl pt-16">
          <p>There is no item in your bag.</p>
        </div>
      )}
    </>
  );
}
