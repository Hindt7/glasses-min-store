import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useData() {
    const { data, error, isLoading } = useSWR("https://dummyjson.com/products/category/sunglasses", fetcher);

    let productData;
    
    if (data) {
        productData = data.products;

        // for (const prod of productData) {
        //     prod.amountInBag = 0;
        // }
    }

    
    console.log('usedata');
    //console.log(data);
    console.log(productData);

    return { productData, error, isLoading };
}
