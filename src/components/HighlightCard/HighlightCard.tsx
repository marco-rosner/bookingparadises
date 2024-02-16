import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Property } from "../../mock/properties";

interface HighlightCardInterface {
    property: Property
}

export const HighlightCard = ({ property: { id, name, description, img }}: HighlightCardInterface): React.ReactElement => {
    let navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: "350px", margin: "20px" }}>
            <CardActionArea onClick={() => navigate(`/property/${id}/details`)}>
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