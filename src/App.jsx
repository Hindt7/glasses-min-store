import { Link, Outlet } from "react-router-dom";
import { BagProvider } from "./appContext.jsx";
import logo from "./assets/logo_md.png";
import bagIcon from "./assets/icons8-shopping-bag-48-blue-filled.png";

export default function App() {
  //const [bag, setBag] = useState({});

  return (
    <>
      <div className="flex flex-col h-screen min-w-100 m-3">
        <div
          id="header"
          className="w-full min-h-[80px] md:px-30 flex flex-row justify-between md:pt-6"
        >
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="h-16 cursor-pointer" />
          </Link>
          <div className="flex justify-around">
            <Link
              to={"allproducts/"}
              className="mr-5 pr-10 self-center cursor-pointer md:text-xl"
            >
              Our Collection
            </Link>
            <div className="self-center">
              <Link to={"shoppingbag/"}>
                <button className="bag-btn cursor-pointer rounded-3xl border-2 border-mediumblue py-2 px-4 hover:border-deepblue">

                  <img src={bagIcon} alt="Bag" className="h-6"/>
                </button>
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
