import { BookingInterface, BookingStatus } from "../types";

export interface ActionInterface {
    type: string;
    payload: BookingInterface
}

export const reducer = (state: BookingInterface[], { type, payload }: ActionInterface)
    : BookingInterface[] => {
    switch (type) {
        case 'created':
            return [...state, { ...payload, status: BookingStatus.Pending } ]
        case 'updated':
            return state.map(booking => {
                if (booking.id === payload.id) {
                    return { ...booking, ...payload }
                } else {
                    return booking
                }
            })
        case 'confirmed':
            return state.map(booking => {
                if (booking.id === payload.id) {
                    return { ...booking, ...payload, status: BookingStatus.Confirmed }
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