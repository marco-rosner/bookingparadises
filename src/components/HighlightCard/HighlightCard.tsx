import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

import { useBookings, useNextId } from "../../hooks";
import { Property } from "../../types";
import { ActionType } from "../../store/reducer";

interface HighlightCardInterface {
    property: Property
}

export const HighlightCard = ({ property }: HighlightCardInterface): React.ReactElement => {
    const { dispatch } = useBookings()
    const { nextId } = useNextId()
    const navigate = useNavigate()
    const { id, img, name, description } = property
    
    const onClick = () => {
        dispatch({ type: ActionType.Created, payload: { id: nextId, property, }})

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