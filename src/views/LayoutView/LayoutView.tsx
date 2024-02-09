import { Divider, Grid } from "@mui/material"
import { Outlet } from "react-router-dom"
import { BookingForm } from "../../components/BookingForm/BookingForm"

export const LayoutView = (): React.ReactElement => {
    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ minWidth: '100vw', minHeight: '30vh', background: '#40caa1' }}
            >
                <BookingForm />
            </Grid>
            <Divider light sx={{ bgcolor: 'white', borderWidth: 1 }} />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ minWidth: '100vw', background: 'lightgray' }}
            >
                <Outlet />
            </Grid>
        </>
    )
}