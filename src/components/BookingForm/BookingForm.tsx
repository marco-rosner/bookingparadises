import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import 'dayjs/locale/en'
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

import React from "react";
import { places } from "../../mock/places";

export const BookingForm = (): React.ReactElement => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            sx={{ minWidth: '200px' }}>
                <Grid item>
                    <Autocomplete
                        freeSolo
                        id="searchPlace"
                        disableClearable
                        options={places.map((place) => place.name)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search Place"
                                sx={{ minWidth: '200px' }}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search'
                                }}
                            />
                        )}
                    />
                </Grid>

                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en'}>
                    <Grid item>
                        <DatePicker
                            label="Start Date"
                            sx={{ minWidth: '200px' }}
                            onChange={(newValue) => {
                                console.log(newValue);
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <DatePicker
                            label="End Date"
                            sx={{ minWidth: '200px' }}
                            onChange={(newValue) => {
                                console.log(newValue);
                            }}
                        />
                    </Grid>
                </LocalizationProvider>
                <Grid item>
                    <Button>Search</Button>
                </Grid>
        </Grid>
    )
}