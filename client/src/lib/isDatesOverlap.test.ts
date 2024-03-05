import dayjs from 'dayjs'
import { properties } from '../mock/properties'
import { BookingStatus } from '../types'
import { isDatesOverlap } from './isDatesOverlap'

describe("isDatesOverlap", () => {
    test("with overlap dates", () => {
        const datesToValidate = {
            startDate: dayjs("2024-1-16"),
            endDate: dayjs("2024-1-22"),
        }
        const bookings = [{
            id: 1,
            status: BookingStatus.Confirmed,
            property: properties[0],
            startDate: dayjs("2024-1-20"),
            endDate: dayjs("2024-1-23"),
        }]

        expect(isDatesOverlap(properties[0].id, bookings, datesToValidate)).toBeTruthy()
    })

    test("without overlap dates", () => {
        const datesToValidate = {
            startDate: dayjs("2024-1-16"),
            endDate: dayjs("2024-1-19"),
        }
        const bookings = [{
            id: 1,
            status: BookingStatus.Confirmed,
            property: properties[0],
            startDate: dayjs("2024-1-20"),
            endDate: dayjs("2024-1-23"),
        }]

        expect(isDatesOverlap(properties[0].id, bookings, datesToValidate)).toBeFalsy()
    })

    test("without confirmed bookings", () => {
        const datesToValidate = {
            startDate: dayjs("2024-1-16"),
            endDate: dayjs("2024-1-19"),
        }
        const bookings = [{
            id: 1,
            status: BookingStatus.Pending,
            property: properties[0],
            startDate: dayjs("2024-1-20"),
            endDate: dayjs("2024-1-23"),
        }]

        expect(isDatesOverlap(properties[0].id, bookings, datesToValidate)).toBeFalsy()
    })
})