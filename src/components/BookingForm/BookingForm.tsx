import { Button, Grid, Input } from "@mui/material";
import React from "react";

export const BookingForm = (): React.ReactElement => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Input placeholder="Choose the place"></Input>
            <Input placeholder="Choose the start date"></Input>
            <Input placeholder="Choose the end date"></Input>
            <Button>Search</Button>
        </Grid>
    )
}