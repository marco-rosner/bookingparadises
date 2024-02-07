import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Place } from "../../mock/places";

export const HighlightCard = ({name, description, img}: Place): React.ReactElement => {
    return (
        <Card sx={{ maxWidth: "350px", margin: "20px" }}>
            <CardActionArea onClick={() => console.log('Highlight')}>
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
                    <Typography variant="caption" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}