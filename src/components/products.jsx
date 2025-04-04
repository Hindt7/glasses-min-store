//import { useContext } from "react";
import { useData } from "../useData";
import ProductCard from "./productcard";
//import { BagContext } from "../appContext";

export default function Products() {
    const {productData, error, isLoading} = useData();
    //const { data, error, isLoading } = useSWR("https://dummyjson.com/products/category/sunglasses", fetcher);
    //const bag = useContext(BagContext);


    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading data: {error.message}</p>;
    }

    if (!productData) {
        //console.log('non data');
        return <p>No data available.</p>;
    }

    return (
        <>
        <div className="min-h-24 w-full pt-7 text-center text-3xl">Our Collections</div>
        <div className="grid h-full w-full grid-cols-2 place-content-stretch md:grid-cols-3 gap-3 px-3 bg-sky-950">
            { productData.length > 0 ? (
                productData.map((glasses) => (
                    <ProductCard product={glasses} key={glasses.id} />
                ))
            ) : (
                <div className="text-center col-span-full">No products available</div>
            )}

{/* 
          <div className="min-h-75">
            <div className="h-3/4 bg-amber-200">Product image</div>
            <div className="min-h-10">Sunglasses</div>
          </div>
          <div className="min-h-75 bg-sky-500"></div>
          <div className="min-h-75">
            <div className="h-3/4 bg-amber-200">Product image</div>
            <div className="min-h-10">Sunglasses</div>
          </div>
    
          <div className="min-h-75 bg-sky-500"></div>
          <div className="min-h-75">
            <div className="h-3/4 bg-amber-200">Product image</div>
            <div className="min-h-10">Sunglasses</div>
          </div>
          <div className="min-h-75 bg-sky-500"></div>
          <div className="min-h-75">
            <div className="h-3/4 bg-amber-200">Product image</div>
            <div className="min-h-10">Sunglasses</div>
          </div>
          <div className="min-h-75 bg-sky-500"></div>
          <div className="min-h-75">
            <div className="h-3/4 bg-amber-200">Product image</div>
            <div className="min-h-10">Sunglasses</div>
          </div> */}
        </div>

        </>
    
    )
}