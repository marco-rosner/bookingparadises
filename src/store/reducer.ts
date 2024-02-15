import { Property } from "../mock/properties";

export interface BookingInterface {
    id: number;
    property: Property;
    startDate: Date;
    endDate: Date;
    price: number;
}

export interface ActionInterface {
    type: string;
    payload: BookingInterface
}

export const reducer = (state: BookingInterface[], { type, payload }: ActionInterface)
    : BookingInterface[] => {
    switch (type) {
        case 'added':
            return [...state, payload]
        case 'updated':
            return state.map(booking => {
                if (booking.id === payload.id) {
                    return payload
                } else {
                    return booking
                }
            })
        case 'deleted':
            return state.filter((booking) => booking.id !== payload.id)
        default:
            new Error('Action not supported')
            return state
    }
}