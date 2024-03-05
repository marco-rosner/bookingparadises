import dayjs from 'dayjs'
import { BookingStatus } from '../types'
import { filterProperties } from './filterProperties'
import { properties } from '../__mocks__/properties'

describe("filterProperties", () => {
    test("with no confirmed bookings", () => {
        const bookingId = 1
        const bookings = [{
            id: bookingId,
            status: BookingStatus.Pending,
            property: properties[0],
            startDate: dayjs("2024-1-20"),
            endDate: dayjs("2024-1-23"),
        }]

        const propertiesFilteredWithSamePlace = properties.filter(
            p => p.placeId === properties[0].placeId
        )

        expect(
            filterProperties(properties, bookingId, properties[0].placeId, bookings)
        ).toEqual(propertiesFilteredWithSamePlace)
    })

    test("with confirmed bookings but with dates overlap", () => {
        const bookingId = 1
        const bookings = [{
            id: bookingId,
            status: BookingStatus.Pending,
            property: properties[0],
            startDate: dayjs("2024-1-20"),
            endDate: dayjs("2024-1-23"),
        },
        {
            id: 2,
            status: BookingStatus.Confirmed,
            property: properties[0],
            startDate: dayjs("2024-1-19"),
            endDate: dayjs("2024-1-23"),
        }]

        const propertiesFiltered = properties.filter(
            p => p.placeId === properties[0].placeId && p.id !== properties[0].id
        )

        expect(
            filterProperties(properties, bookingId, properties[0].placeId, bookings)
        ).toEqual(propertiesFiltered)
    })

    test("with confirmed bookings but with no dates overlap", () => {
        const bookingId = 1
        const bookings = [{
            id: bookingId,
            status: BookingStatus.Pending,
            property: properties[0],
            startDate: dayjs("2024-1-25"),
            endDate: dayjs("2024-1-27"),
        },
        {
            id: 2,
            status: BookingStatus.Confirmed,
            property: properties[0],
            startDate: dayjs("2024-1-19"),
            endDate: dayjs("2024-1-23"),
        }]

        const propertiesFilteredWithSamePlace = properties.filter(
            p => p.placeId === properties[0].placeId
        )

        expect(
            filterProperties(properties, bookingId, properties[0].placeId, bookings)
        ).toEqual(propertiesFilteredWithSamePlace)
    })

    test("with confirmed bookings but no in the same property", () => {
        const bookingId = 1
        const bookings = [{
            id: bookingId,
            status: BookingStatus.Pending,
            property: properties[0],
            startDate: dayjs("2024-1-20"),
            endDate: dayjs("2024-1-23"),
        },
        {
            id: 2,
            status: BookingStatus.Confirmed,
            property: properties[1],
            startDate: dayjs("2024-1-19"),
            endDate: dayjs("2024-1-23"),
        }]

        const propertiesFiltered = properties.filter(p => p.placeId === properties[0].placeId)

        expect(
            filterProperties(properties, bookingId, properties[0].placeId, bookings)
        ).toEqual(propertiesFiltered)
    })
})