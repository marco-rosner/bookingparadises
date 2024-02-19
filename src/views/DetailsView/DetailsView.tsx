import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import dayjs, { Dayjs } from "dayjs"

import { Box, Button, CardMedia, Grid, Typography } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

import { AlertPopup, DateField } from "../../components"
import { useBookings, usePlaces, useProperties } from "../../hooks"
import { isDatesOverlap } from "../../lib/isDatesOverlap"
import { ActionType } from "../../store/reducer"
import { BookingStatus } from "../../types"

export const DetailsView = (): React.ReactElement => {
    const today = dayjs()
    const todayPlus3 = today.add(3, "day")
    const [startDate, setStartDate] = useState<Dayjs | undefined>(today)
    const [endDate, setEndDate] = useState<Dayjs | undefined>(todayPlus3)
    const [price, setPrice] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    const { bookings, dispatch } = useBookings()
    let navigate = useNavigate()
    const { bookingId, propertyId } = useParams()
    const { data: properties } = useProperties()
    const { data: places } = usePlaces()
    const property = properties.find(p => p.id === Number(propertyId))
    const place = places.find(p => p.id === property?.placeId)

    useEffect(() => {
        const currentBooking = bookings.find(b => b.id === Number(bookingId))

        if (currentBooking) {
            setStartDate(currentBooking.startDate || startDate)
            setEndDate(currentBooking.endDate || endDate)

            const days = dayjs(endDate).diff(dayjs(startDate), "day")
            console.log(property?.price)
            setPrice(days * Number(property?.price))
        }
    }, [properties, bookings])

    useEffect(() => {
        if (startDate && endDate) {
            if (dayjs(startDate).isAfter(endDate) || dayjs(endDate).isBefore(startDate)) {
                setError(true)
            } else {
                setError(false)
            }

            const days = dayjs(endDate).diff(dayjs(startDate), "day")
            setPrice(days * Number(property?.price))
        }
    }, [startDate, endDate])

    useEffect(() => {
        if (success) setTimeout(() => navigate("/manage"), 3000)
    }, [success])

    const onClick = () => {
        if (!isDatesOverlap(Number(property?.id), bookings, { startDate, endDate })) {
            dispatch({
                type: ActionType.Updated, payload: {
                    id: Number(bookingId),
                    status: BookingStatus.Confirmed,
                    price: price,
                    startDate: startDate,
                    endDate: endDate
                }
            })

            setSuccess(true)
        } else {
            setError(true)
        }
    }

    return (
        <Box sx={{ marginTop: '20px' }}>
            <Grid
                container
                item
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ marginTop: '10px' }}
                xs={8}
                sm={10}
                md={12}
                lg={12}
                xl={12}
            >
                <Typography variant="h4">{`${property?.name} in ${place?.name}`}</Typography>
                <Typography variant="subtitle1">{property?.tags.reduce((acc, cur) => (`${acc}, ${cur}`))}</Typography>
                <Typography variant="h6" sx={{ margin: '10px' }}>{property?.description}</Typography>
                <Grid container sx={{ justifyContent: 'center', alignContent: 'center' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={property?.img}
                        alt={property?.name}
                        sx={{ width: '300px', height: '300px' }}
                    />
                </Grid>
                <Typography variant="h6" sx={{ margin: '10px' }}>{`Price per day: ${property?.price}`}</Typography>
                <Box sx={{ width: '40vw' }}>
                    <Grid container sx={{ direction: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en'}>
                            <Box sx={{ margin: '5px' }}>
                                <DateField label="Start Date" error={error} color="#000" value={startDate} setDate={setStartDate} />
                            </Box>
                            <Box sx={{ margin: '5px' }}>
                                <DateField label="End Date" error={error} color="#000" value={endDate} setDate={setEndDate} />
                            </Box>
                        </LocalizationProvider>
                    </Grid>
                </Box>
                <Typography variant="h6" sx={{ margin: '10px' }}>
                    {`Total price: ${price < 0 ? 0 : price}`}
                </Typography>
                <Button variant="contained" size="large" sx={{ textTransform: "none" }} onClick={onClick} disabled={error || !endDate}>Reserve this paradise</Button>
                <AlertPopup
                    open={error}
                    message="There is an error in the dates or property not available for the dates"
                    severity="error" />
                <AlertPopup
                    open={success}
                    message="Your reservation is confirmed! You will be redirect to manage your bookings in 2s..."
                    severity="success" />
            </Grid>
        </Box>
    )
}