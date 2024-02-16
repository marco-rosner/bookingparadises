import { useContext } from "react";
import { BookingContext } from "../components/BookingProvider/BookingProvider";

export const useBookings = () => useContext(BookingContext)