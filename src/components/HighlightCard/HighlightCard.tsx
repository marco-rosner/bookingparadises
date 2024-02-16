import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useBookings } from "../../hooks/useBookings";
import { useNextId } from "../../hooks/useNextId";
import { Property } from "../../mock/properties";

interface HighlightCardInterface {
    property: Property
}

export const HighlightCard = ({ property }: HighlightCardInterface): React.ReactElement => {
    const { dispatch } = useBookings()
    const { nextId } = useNextId()
    let navigate = useNavigate()
    const { id, img, name, description } = property
    
    const onClick = () => {
        dispatch({ type: 'created', payload: { id: nextId, property, }})

        navigate(`/bookings/${nextId}/properties/${id}`)
    }

    return (
        <Card sx={{ maxWidth: "350px", margin: "20px" }}>
            <CardActionArea onClick={onClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="caption" color="gray">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}