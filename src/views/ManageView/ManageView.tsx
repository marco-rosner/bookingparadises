import { Box, Button, CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import dayjs from "dayjs"
import { useState } from "react"
import { AlertPopup } from "../../components/AlertPopup/AlertPopup"
import { useBookings } from "../../hooks/useBookings"
import { BookingStatus } from "../../store/reducer"

export const ManageView = (): React.ReactElement => {
    const [isOpen, setOpen] = useState(false)
    const { bookings, dispatch } = useBookings()
    const filteredBookings = bookings.filter(
        booking => booking.status != BookingStatus.Pending
    )

    const onClick = (id: number) => {
        dispatch({ type: 'deleted', payload: { id } })

        setOpen(true)
    }

    return (
        <Box sx={{ marginTop: '20px'}}>
            <Typography variant="h4">Manage bookings</Typography>
        <TableContainer
            component={Paper}
            sx={{
                minWidth: '70vw',
                width: '70%',
                margin: "20px"
            }}>
            <Table sx={{ minWidth: '60vw' }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Property</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Reservation Dates</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    {filteredBookings.length === 0 ? (
                        <TableRow>
                            <TableCell align="center" colSpan={7}>No Bookings</TableCell>
                        </TableRow>
                    ) : filteredBookings.map(({ id, property, startDate, endDate, price }) => {
                        const fromDate = `${dayjs(startDate).format("MMM")}/${dayjs(startDate).day()}/${dayjs(startDate).year()}`
                        const toDate = `${dayjs(endDate).format("MMM")}/${dayjs(endDate).day()}/${dayjs(endDate).year()}`

                        return (
                            <TableRow key={id}>
                                <TableCell>{`#${id}`}</TableCell>
                                <TableCell>{property?.name}</TableCell>
                                <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={property?.img}
                                        alt={property?.name}
                                        sx={{ width: '128px', height: '128px' }}
                                    />
                                </TableCell>
                                <TableCell>{property?.description}</TableCell>
                                <TableCell align="center">{`$ ${price}`}</TableCell>
                                <TableCell align="center">{`From ${fromDate} to ${toDate}`}</TableCell>
                                <TableCell align="center">
                                    <Button variant="contained" sx={{ textTransform: "none" }} color="secondary" onClick={() => onClick(id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <AlertPopup
                open={isOpen}
                message="Your reservation was deleted"
                severity="info" />
        </TableContainer>
        </Box>
    )
}