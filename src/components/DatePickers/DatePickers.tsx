import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";
import 'dayjs/locale/en'
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { AlertPopup } from "../AlertPopup/AlertPopup";

dayjs.extend(utc);
dayjs.extend(timezone);

export const DatePickers = (): React.ReactElement => {
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()
    const [error, setError] = useState(false)

    useEffect(() => {
        if (startDate && endDate) setError(dayjs(endDate).isBefore(startDate))
    }, [startDate])

    useEffect(() => {
        if (startDate && endDate) setError(dayjs(startDate).isAfter(endDate))
    }, [endDate])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en'}>
            <Grid item>
                <DatePicker
                    label="Start Date"
                    onChange={(sDate: Date | null) => {
                        sDate && setStartDate(sDate);
                        console.log(dayjs(sDate).toDate());
                    }}
                    slotProps={{
                        textField: {
                            error: error,
                            sx: {
                                width: '200px',
                                minWidth: '200px'
                            },
                        },
                    }}
                    disablePast
                />
            </Grid>
            <Grid item>
                <DatePicker
                    label="End Date"
                    onChange={(eDate: Date | null) => {
                        eDate && setEndDate(eDate);
                        console.log(dayjs(eDate).toDate());
                    }}
                    slotProps={{
                        textField: {
                            error: error,
                            sx: {
                                width: '200px',
                                minWidth: '200px'
                            },
                        },
                    }}
                    disablePast
                />
            </Grid>

            <AlertPopup
                error={error}
                message="There is an error in the dates"
                severity="error" />
        </LocalizationProvider>
    )
}