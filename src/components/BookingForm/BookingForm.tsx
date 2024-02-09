import React from "react";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";

import { places } from "../../mock/places";
import { DatePickers } from "../DatePickers/DatePickers";

export const BookingForm = (): React.ReactElement => {
    return (
        <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            sx={{ minWidth: '200px', marginTop: '10px' }}
            xs={4}
            sm={12}
        >
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
                            sx={{ minWidth: '300px' }}
                            InputProps={{
                                ...params.InputProps,
                                type: 'search'
                            }}
                        />
                    )}
                />
            </Grid>
            <DatePickers />
            <Grid item>
                <Button size="large" sx={{ color: 'white' }}>Search</Button>
            </Grid>
        </Grid>
    )
}