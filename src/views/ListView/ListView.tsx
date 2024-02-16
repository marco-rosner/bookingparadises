import { Box, Button, CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AlertPopup } from "../../components/AlertPopup/AlertPopup"
import { useBookings } from "../../hooks/useBookings"
import { useProperties } from "../../hooks/useProperties"
import { Property } from "../../mock/properties"

export const ListView = (): React.ReactElement => {
    const { data: properties } = useProperties()
    const { bookings, dispatch } = useBookings()
    const [success, setSuccess] = useState(false)

    let navigate = useNavigate()
    let { bookingId, placeId } = useParams()

    const filteredProperties = properties.filter(property => property.placeId === Number(placeId))
    const currentBooking = bookings.find((booking) => booking.id === Number(bookingId))
    const days = dayjs(currentBooking?.endDate).diff(dayjs(currentBooking?.startDate), "day")

    const onClick = (id: number) => {
        const property = filteredProperties.find(p => p.id === id)

        dispatch({ type: 'confirmed', payload: { ...currentBooking, id: Number(bookingId), property, price: days * (property?.price || 1) } })

        setSuccess(true)
    }

    useEffect(() => { if (success) setTimeout(() => navigate("/manage"), 3000) }, [success])

    return (
        <Box sx={{ marginTop: '20px'}}>
            <Typography variant="h4">Reserve your paradise right here!</Typography>
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
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Property</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell align="center">Price for {days} days</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {filteredProperties.length === 0 ? (
                            <TableRow>
                                <TableCell align="center" colSpan={5}>No properties available</TableCell>
                            </TableRow>
                        ) : filteredProperties.map(({ id, name, description, price, img }: Property) => (
                            <TableRow key={id}>
                                <TableCell align="center">{name}</TableCell>
                                <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={img}
                                        alt={name}
                                        sx={{ width: '128px', height: '128px' }}
                                    />
                                </TableCell>
                                <TableCell>{description}</TableCell>
                                <TableCell align="center">{`$ ${days * price}`}</TableCell>
                                <TableCell align="center">
                                    <Button variant="contained" sx={{ textTransform: "none" }} onClick={() => onClick(id)}>
                                        Reserve this paradise
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <AlertPopup
                    open={success}
                    message="Your reservation is confirmed! You will be redirect to manage your bookings in 2s..."
                    severity="success" />
            </TableContainer>
        </Box>
    )
}