import { Box, Button, CardMedia, Grid, Typography } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AlertPopup } from "../../components/AlertPopup/AlertPopup"
import { DateField } from "../../components/DateField/DateField"
import { useBookings } from "../../hooks/useBookings"
import { usePlaces } from "../../hooks/usePlaces"
import { useProperties } from "../../hooks/useProperties"

export const DetailsView = () => {
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()
    const [price, setPrice] = useState<number>()
    const [days, setDays] = useState<number>()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const { dispatch } = useBookings()
    let navigate = useNavigate()
    const { bookingId, propertyId } = useParams()
    const { data: properties } = useProperties()
    const { data: places } = usePlaces()
    const property = properties.find(p => p.id === Number(propertyId))
    const place = places.find(p => p.id === property?.placeId)

    useEffect(() => {
        if (startDate && endDate) {
            if (dayjs(startDate).isAfter(endDate) || dayjs(endDate).isBefore(startDate)){
                setError(true)
            } else {
                setError(false)
            }

            setDays(dayjs(endDate).diff(dayjs(startDate), "day"))
        }
    }, [startDate, endDate])

    useEffect(() => {
        setPrice(Number(days) * Number(property?.price))
    }, [days])

    useEffect(() => {
        if (success) setTimeout(() => navigate("/manage"), 3000)
    }, [success])

    const onClick = () => {
        dispatch({
            type: 'confirmed', payload: {
                id: Number(bookingId),
                price: price,
                startDate: startDate,
                endDate: endDate
            }
        })

        setSuccess(true)
    }

    return (
        <Box sx={{ marginTop: '20px' }}>
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
                        <DateField label="Start Date" error={error} color="#000" setDate={setStartDate} />
                        <DateField label="End Date" error={error} color="#000" setDate={setEndDate} />
                    </LocalizationProvider>
                </Grid>
            </Box>
            <Typography variant="h6" sx={{ margin: '10px' }}>
                {
                    !endDate || error ?
                        "Total price: Choose the dates to see the total price" :
                        `Total price: ${price}`
                }
            </Typography>
            <Button variant="contained" size="large" sx={{ textTransform: "none" }} onClick={onClick} disabled={error || !endDate}>Reserve this paradise</Button>
            <AlertPopup
                open={error}
                message="There is an error in the dates"
                severity="error" />
            <AlertPopup
                open={success}
                message="Your reservation is confirmed! You will be redirect to manage your bookings in 2s..."
                severity="success" />
        </Box>
    )
}