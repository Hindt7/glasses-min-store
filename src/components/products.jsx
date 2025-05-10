import { useData } from "../useData";
import ProductCard from "./productcard";
import crossPtn from '../assets/cross_ptn.png';
import sprinklesPtn from '../assets/sprinkles_ptn.png';
import wavesPtn from '../assets/waves_ptn.png';
import linesPtn from '../assets/straight_lines_ptn.png';
import React from 'react';




export default function Products() {
    const {productData, error, isLoading} = useData();
    let imageArray = [crossPtn, sprinklesPtn, wavesPtn, linesPtn];

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading data: {error.message}</p>;
    }

    if (!productData) {
        return <p>No data available.</p>;
    }

    return (
        <>
        <div className="min-h-24 w-full pt-7 text-center text-3xl">Our Collections</div>
        <div className="grid h-full w-full grid-cols-2 place-content-stretch md:grid-cols-3 gap-3 px-3 py-3 pb-5">
            { productData.length > 0 ? (
                productData.map((glasses, index) => (
                  <React.Fragment key={glasses.id}>
                  <div className="">
                      <ProductCard product={glasses} />
                  </div>
                  {index < 4 && ( // Pattern image not rendered for last product in list
                            <div className="">
                                <img
                                    src={imageArray[index]}
                                    className="object-cover"
                                    alt={`Pattern ${index}`}
                                />
                            </div>
                        )}
              </React.Fragment>
              ))
            ) : (
                <div className="text-center col-span-full">No products available</div>
            )}

        </div>

        </>
    
    )
}