import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import 'dayjs/locale/en'
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { DateField } from "../DateField/DateField";
import { useBookings } from "../../hooks/useBookings";
import { AlertPopup } from "../AlertPopup/AlertPopup";
import { PlaceField } from "../PlaceField/PlaceField";
import { useNavigate } from "react-router-dom";

dayjs.extend(utc);
dayjs.extend(timezone);

export interface FormState {
    placeId: number;
    startDate?: Date;
    endDate?: Date;
}

export const BookingForm = (): React.ReactElement => {
    const [placeId, setPlaceId] = useState<number>()
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()
    const [error, setError] = useState(false)
    const { bookings, dispatch } = useBookings()
    const navigate = useNavigate()

    useEffect(() => {
        if (startDate && endDate) setError(dayjs(endDate).isBefore(startDate))
    }, [startDate])

    useEffect(() => {
        if (startDate && endDate) setError(dayjs(startDate).isAfter(endDate))
        console.log(dayjs(startDate).toDate());
    }, [endDate])

    const onClick = () => {
        const nextId = bookings[bookings.length-1] ? bookings[bookings.length-1].id + 1 : 123842 // just for fun =)

        dispatch({ type: 'created', payload: { id: nextId, startDate, endDate } })

        navigate(`/booking/${nextId}/place/${placeId}`)
    }

    return (
        <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ marginTop: '10px' }}
            xs={8}
            md={11}
            lg={8}
            xl={8}
        >
            <Grid item xs={8} md={4} lg={3} xl={3}>
                <PlaceField label="Search your paradise" setPlaceId={setPlaceId} />
            </Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en'}>
                <Grid item xs={8} md={3} lg={2.3} xl={1.7}>
                    <DateField label="startDate" error={error} setDate={setStartDate} />
                </Grid>
                <Grid item xs={8} md={3} lg={2.3} xl={1.7}>
                    <DateField label="endDate" error={error} setDate={setEndDate} />
                </Grid>
            </LocalizationProvider>
            <Grid item xs={8} md={1} lg={1}>
                <Button size="large" color="secondary" onClick={onClick} disabled={error}>Search</Button>
            </Grid>
            <AlertPopup
                error={error}
                message="There is an error in the dates"
                severity="error" />
        </Grid>
    )
}