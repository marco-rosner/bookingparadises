import { useBookings } from "./useBookings"

export const useNextId = () => {
    const { bookings } = useBookings()

    const nextId = bookings[bookings.length - 1] ? bookings[bookings.length - 1].id + 1 : 123842 // just for fun =)

    return { nextId }
}