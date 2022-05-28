import { createContext, useState } from "react";


const BarContext = createContext({
    barToggle: () => {},
    barIsOpen: false
});


export const BarContextProvider = ({children}) => {

    const [barIsOpen, setBarIsOpen] = useState(false);

    const barToggleHandler = (prevState) => {
        setBarIsOpen(prevState => !prevState);
    };

    const barContextValue = {
        barIsOpen: barIsOpen,
        barToggle: barToggleHandler
    }

    return (
        <BarContext.Provider value={barContextValue}>
            {children}
        </BarContext.Provider>
    )
};


export default BarContext;