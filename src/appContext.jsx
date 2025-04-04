import { createContext, useState } from "react";

export const BagContext = createContext([]);

export function BagProvider({ children }) {
    const [bag, setBag] = useState([]); // Ensure the initial value is an empty array

    return (
        <BagContext.Provider value={{ bag, setBag }}>
            {children}
        </BagContext.Provider>
    );
}