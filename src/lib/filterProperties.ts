import { BookingInterface, BookingStatus, Property } from "../types"
import { isBetweenDates } from "./isBetweenDates"

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
        return !confirmedBookings.find((booking: BookingInterface) => {
            const sameProperty = property.id === booking?.property?.id
            // const sDate = dayjs(booking.startDate).isBetween(currentBooking?.startDate, currentBooking?.endDate, "days", "[]")
            // const eDate = dayjs(booking.endDate).isBetween(currentBooking?.startDate, currentBooking?.endDate, "days", "[]")

            return sameProperty && 
                isBetweenDates({
                    startDate: booking.startDate,
                    endDate: booking.endDate
                }, {
                    startDate: currentBooking?.startDate,
                    endDate: currentBooking?.endDate
                })
        })
    })

    return filteredByDate
}