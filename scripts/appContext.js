import { createContext, useState } from "react";

export const AppContext = createContext({ cart: [], setCart: () => {} });

export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    return (
    <AppContext.Provider value={{ cart, setCart }}>
         {children} 
    </AppContext.Provider>
    )
}