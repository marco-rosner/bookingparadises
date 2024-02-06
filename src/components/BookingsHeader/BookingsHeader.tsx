import React from 'react'
import { Grid } from "@mui/material"
import { BookingForm } from '../BookingForm/BookingForm'

export const BookingsHeader = (): React.ReactElement => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '20vh' }}
        >
            <BookingForm />
        </Grid>
    )
}