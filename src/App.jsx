import { Link, Outlet } from "react-router-dom";
import { BagProvider } from "./appContext";
//import { useState } from "react";

export default function App() {
  //const [bag, setBag] = useState({});

  return (
    <>
      <div className="flex flex-col h-screen min-w-100">
        <div id="header" className="w-full min-h-[80px] px-40 flex flex-row justify-between bg-black text-sky-400">
          <div className="self-center">Logo</div>
          <div className="flex justify-around">
            <Link to={"allproducts/"} className="mr-5 pr-10 self-center cursor-pointer">
              All products
            </Link>
            <div className="self-center">
              <Link to={"shoppingbag/"} className="py-1.5 px-4 bg-stone-50 hover:bg-sky-700 rounded-2xl cursor-pointer">
                Bag
              </Link>
            </div>

          </div>
        </div>
        <div id="wrapper" className="flex w-full flex-col px-10 ">
          <BagProvider >
          <Outlet />

          </BagProvider>
        </div>
      </div>
    </>
  )
}