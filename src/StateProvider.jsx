import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";

// Prepare the data layer 
export const StateContext = createContext();

const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export default StateProvider;