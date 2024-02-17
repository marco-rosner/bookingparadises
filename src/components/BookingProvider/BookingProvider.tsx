import React, { Dispatch, Reducer, useReducer } from "react";
import { ActionInterface, reducer } from "../../store/reducer";
import { BookingInterface } from "../../types";

interface ContextInterface {
    bookings: BookingInterface[];
    dispatch: Dispatch<ActionInterface>
}

interface BookingProviderInterface {
    children: React.ReactElement
}

export const BookingContext = React.createContext<ContextInterface>({
    bookings: [], dispatch: () => { }
})

export const BookingProvider = ({ children }: BookingProviderInterface) => {
    const [bookings, dispatch] = useReducer<
        Reducer<BookingInterface[], ActionInterface>
    >(reducer, [])

    return (
        <BookingContext.Provider value={{ bookings, dispatch }}>
            {children}
        </BookingContext.Provider>
    )
}