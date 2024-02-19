import { BookingInterface, BookingStatus, Property } from "../types"
import { isDatesOverlap } from "./isDatesOverlap"

export const filterProperties = (
    properties: Property[],
    bookingId: number,
    placeId: number,
    bookings: BookingInterface[]): Property[] => {
    const currentBooking = bookings.find((booking: BookingInterface) => booking.id === bookingId)
    const confirmedBookings = bookings.filter(b => b.status === BookingStatus.Confirmed)
    const filteredByPlace = properties.filter((p) => p.placeId === placeId)

    if (confirmedBookings.length === 0) return filteredByPlace

    const filteredByDate = filteredByPlace.filter((property) => {
        return !isDatesOverlap(
            property.id,
            bookings,
            {
                startDate: currentBooking?.startDate,
                endDate: currentBooking?.endDate
            })
    })

    return filteredByDate
}