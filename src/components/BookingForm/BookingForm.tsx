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
            spacing={2}
            sx={{ marginTop: '10px' }}
            xs={8}
            md={11}
            lg={8}
            xl={8}
        >
            <Grid item xs={8} md={4} lg={3} xl={3}>
                <Autocomplete
                    freeSolo
                    id="searchPlace"
                    disableClearable
                    options={places.map((place) => place.name)}
                    sx={{
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "1px solid #eee"
                        }
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search the beach"
                            sx={{
                                minWidth: '250px',
                                "& .MuiAutocomplete-inputFocused": { color: "white" }
                            }}
                            InputLabelProps={{
                                color: "secondary"
                            }}
                            InputProps={{
                                ...params.InputProps,
                                type: 'search'
                            }}
                        />
                    )}
                />
            </Grid>
            <DatePickers />
            <Grid item xs={8} md={1} lg={1}>
                <Button size="large" color="secondary">Search</Button>
            </Grid>
        </Grid>
    )
}