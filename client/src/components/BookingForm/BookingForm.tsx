import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import 'dayjs/locale/en'

import { DateField } from "../DateField/DateField";
import { AlertPopup } from "../AlertPopup/AlertPopup";
import { PlaceField } from "../PlaceField/PlaceField";
import { useBookings, useNextId } from "../../hooks";
import { ActionType } from "../../store/reducer";

dayjs.extend(utc);
dayjs.extend(timezone);

export const BookingForm = (): React.ReactElement => {
    const [placeId, setPlaceId] = useState<number>()
    const [startDate, setStartDate] = useState<Dayjs>()
    const [endDate, setEndDate] = useState<Dayjs>()
    const [error, setError] = useState(false)
    const { dispatch } = useBookings()
    const { nextId } = useNextId()
    const navigate = useNavigate()

    useEffect(() => {
        if (startDate && endDate) {
            if (dayjs(startDate).isAfter(endDate) || dayjs(endDate).isBefore(startDate)) {
                setError(true)
            } else {
                setError(false)
            }
        }
    }, [startDate, endDate])

    const onClick = () => {
        dispatch({ type: ActionType.Created, payload: { id: nextId, startDate, endDate } })

        navigate(`/bookings/${nextId}/places/${placeId}`)
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
                    <DateField label="Start Date" id="form-start-date" error={error} setDate={setStartDate} />
                </Grid>
                <Grid item xs={8} md={3} lg={2.3} xl={1.7}>
                    <DateField label="End Date" id="form-end-date" error={error} setDate={setEndDate} />
                </Grid>
            </LocalizationProvider>
            <Grid item xs={8} md={1} lg={1}>
                <Button data-cy="submit" size="large" color="secondary" onClick={onClick} disabled={error || !endDate}>Search</Button>
            </Grid>
            <AlertPopup
                open={error}
                message="There is an error in the dates"
                severity="error" />
        </Grid>
    )
}