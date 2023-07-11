import { createContext, useState } from "react";

export const NavbarContext = createContext()
// eslint-disable-next-line react/prop-types
const ContextProvider = ({children}) => {
    const [isBanner, setIsBanner] = useState(false)
    return (
        <NavbarContext.Provider value={{isBanner, setIsBanner}}>
            {children}
        </NavbarContext.Provider>
    );
};

export default ContextProvider;