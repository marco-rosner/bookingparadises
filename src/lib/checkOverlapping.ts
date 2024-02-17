import { BookingInterface, BookingStatus, StartEndDates } from "../types"
import { isBetweenDates } from "./isBetweenDates"

export const checkOverlapping = (propertyId: number, bookings: BookingInterface[], datesToValidate: StartEndDates) => {    
    const confirmedBookings = bookings.filter(b => b.status === BookingStatus.Confirmed)

    return !confirmedBookings.find((booking: BookingInterface) => {
        const sameProperty = propertyId === booking?.property?.id

        return sameProperty && isBetweenDates({
            startDate: booking.startDate,
            endDate: booking.endDate
        }, datesToValidate)
    })
}