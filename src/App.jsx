import { Link, Outlet } from "react-router-dom";
import { BagProvider } from "./appContext";
//import { useState } from "react";

export default function App() {
  //const [bag, setBag] = useState({});

  return (
    <>
      <div className="flex flex-col h-screen min-w-100">
        <div
          id="header"
          className="w-full min-h-[80px] px-40 flex flex-row justify-between"
        >
          <div className="self-center">Logo</div>
          <div className="flex justify-around">
            <Link
              to={"allproducts/"}
              className="mr-5 pr-10 self-center cursor-pointer"
            >
              Our Collection
            </Link>
            <div className="self-center">
              <Link to={"shoppingbag/"}>
                <button className="btn-primary">Bag</button>
              </Link>
            </div>
          </div>
        </div>
        <div id="wrapper" className="flex w-full flex-col px-10 ">
          <BagProvider>
            <Outlet />
          </BagProvider>
        </div>
      </div>
    </>
  );
}
