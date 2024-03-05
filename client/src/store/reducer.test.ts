import dayjs from "dayjs"
import { properties } from "../mock/properties"
import { BookingInterface, BookingStatus } from "../types"
import { ActionInterface, ActionType, reducer } from "./reducer"

describe("reducer", () => {
    test("created action", () => {
        const state: BookingInterface[] = []
        const bookingPending: BookingInterface = {
            id: 1,
            property: properties[0],
            startDate: dayjs("2024-1-25"),
            endDate: dayjs("2024-1-27"),
        }
        const action: ActionInterface = {
            type: ActionType.Created,
            payload: bookingPending,
        }
        expect(reducer(state, action)).toEqual(
            [{ ...bookingPending, status: BookingStatus.Pending }]
        )
    })

    test("updated action", () => {
        const state: BookingInterface[] = [{
            id: 1,
            status: BookingStatus.Pending,
            property: properties[0],
            startDate: dayjs("2024-1-25"),
            endDate: dayjs("2024-1-27"),
        },
        {
            id: 2,
            status: BookingStatus.Confirmed,
            property: properties[0],
            startDate: dayjs("2024-1-25"),
            endDate: dayjs("2024-1-27"),
        }]
        const bookingChanged: BookingInterface = {
            id: 1,
            status: BookingStatus.Pending,
            property: properties[0],
            startDate: dayjs("2024-1-19"),
            endDate: dayjs("2024-1-20"),
        }
        const action: ActionInterface = {
            type: ActionType.Updated,
            payload: bookingChanged,
        }

        expect(reducer(state, action)).toEqual([bookingChanged, state[1]])
    })

    test("confirmed action", () => {
        const state: BookingInterface[] = [{
            id: 1,
            status: BookingStatus.Pending,
            property: properties[0],
            startDate: dayjs("2024-1-25"),
            endDate: dayjs("2024-1-27"),
        },
        {
            id: 2,
            status: BookingStatus.Confirmed,
            property: properties[0],
            startDate: dayjs("2024-1-25"),
            endDate: dayjs("2024-1-27"),
        }]
        const bookingChanged: BookingInterface = {
            id: 1,
            status: BookingStatus.Confirmed,
            property: properties[0],
            startDate: dayjs("2024-1-19"),
            endDate: dayjs("2024-1-20"),
        }
        const action: ActionInterface = {
            type: ActionType.Confirmed,
            payload: bookingChanged,
        }

        expect(reducer(state, action)).toEqual([bookingChanged, state[1]])
    })

    test("confirmed action", () => {
        const state: BookingInterface[] = [{
            id: 1,
            status: BookingStatus.Confirmed,
            property: properties[0],
            startDate: dayjs("2024-1-25"),
            endDate: dayjs("2024-1-27"),
        }]
        const action: ActionInterface = {
            type: ActionType.Deleted,
            payload: { id: state[0].id },
        }

        expect(reducer(state, action)).toEqual([])
    })

    test("default case", () => {
        const state: BookingInterface[] = []
        const action: ActionInterface = {
            type: 'not supported type',
            payload: { id: 1 },
        }

        expect(reducer(state, action)).toEqual(state)
    })
})