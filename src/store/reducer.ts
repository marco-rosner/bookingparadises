import { BookingInterface, BookingStatus } from "../types";

export enum ActionType {
    Created = 'CREATED',
    Updated = 'UPDATED',
    Confirmed = 'CONFIRMED',
    Deleted = 'DELETED'
}

export interface ActionInterface {
    type: string;
    payload: BookingInterface
}

export const reducer = (state: BookingInterface[], { type, payload }: ActionInterface)
    : BookingInterface[] => {
    switch (type) {
        case ActionType.Created:
            return [...state, { ...payload, status: BookingStatus.Pending } ]
        case ActionType.Updated:
            return state.map(booking => {
                if (booking.id === payload.id) {
                    return { ...booking, ...payload }
                } else {
                    return booking
                }
            })
        case ActionType.Confirmed:
            return state.map(booking => {
                if (booking.id === payload.id) {
                    return { ...booking, ...payload, status: BookingStatus.Confirmed }
                } else {
                    return booking
                }
            })
        case ActionType.Deleted:
            return state.filter((booking) => booking.id !== payload.id)
        default:
            new Error('Action not supported')
            return state
    }
}