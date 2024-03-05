import { useContext } from "react";
import { BookingContext } from "../components";

export const useBookings = () => useContext(BookingContext)