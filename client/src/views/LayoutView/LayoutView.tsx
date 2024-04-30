import { Outlet } from "react-router-dom"
import { Divider, Grid } from "@mui/material"

import { BookingForm, BookingMenu } from "../../components"
import { SERVER_PATH } from "../../constant"

export const LayoutView = (): React.ReactElement => (
    <>
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ minWidth: '100vw', minHeight: '30vh', backgroundImage: `url(${SERVER_PATH}/assets/beach.jpg)`, backgroundPositionY: '-50px' }}

        >
            <BookingMenu />
            <BookingForm />
        </Grid>
        <Divider light sx={{ bgcolor: '#e6d6bf', borderWidth: 1 }} />
        <Grid
            container
            direction="column"
            alignItems="center"
            sx={{ minWidth: '100vw', minHeight: '70vh', background: '#e6d6bf' }}
        >
            <Outlet />
        </Grid>
    </>
)