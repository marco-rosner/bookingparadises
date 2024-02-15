import { Divider, Grid } from "@mui/material"
import { Outlet } from "react-router-dom"
import { BookingForm } from "../../components/BookingForm/BookingForm"
import { BookingMenu } from "../../components/BookingMenu/BookingMenu"
import Beach from "../../assets/beach.jpg"

export const LayoutView = (): React.ReactElement => {
    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ minWidth: '100vw', minHeight: '30vh', backgroundImage: `url(${Beach})`, backgroundPositionY: '-50px' }}
            >
                <BookingMenu />
                <BookingForm />
            </Grid>
            <Divider light sx={{ bgcolor: '#e6d6bf', borderWidth: 1 }} />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ minWidth: '100vw', minHeight: '70vh', background: '#e6d6bf' }}
            >
                <Outlet />
            </Grid>
        </>
    )
}