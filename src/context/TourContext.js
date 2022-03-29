import React, {createContext} from "react";
import cities from '../data.json';

export const TourContext = createContext();

const ContextProvider = (props) => {

    return (
        <TourContext.Provider value={cities}>
            {props.children}
        </TourContext.Provider>
    )
}

export default ContextProvider
