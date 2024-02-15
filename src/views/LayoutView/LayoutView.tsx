import { Divider, Grid } from "@mui/material"
import { Outlet } from "react-router-dom"
import { BookingForm } from "../../components/BookingForm/BookingForm"
import { BookingMenu } from "../../components/BookingMenu/BookingMenu"

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
                <BookingMenu />
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