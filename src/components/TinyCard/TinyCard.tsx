import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";

import { useBookings, useNextId } from "../../hooks";
import { Property } from "../../types";
import { ActionType } from "../../store/reducer";

interface TinyCardInterface {
    property: Property
}

export const TinyCard = ({ property }: TinyCardInterface): React.ReactElement => {
    const { dispatch } = useBookings()
    const { nextId } = useNextId()
    let navigate = useNavigate()
    const { id, name, img, tags, price } = property

    const onClick = () => {
        dispatch({ type: ActionType.Created, payload: { id: nextId, property }})

        navigate(`/bookings/${nextId}/properties/${id}`)
    }

    return (
        <Card sx={{ maxWidth: "350px", margin: "20px" }}>
            <CardActionArea sx={{ padding: "10px" }} onClick={onClick}>
                <Grid container spacing={2} sx={{ minWidth: '200px', minHeight: '108px' }}>
                    <Grid item>
                        <CardMedia
                            component="img"
                            height="140"
                            image={img}
                            alt={name}
                            sx={{ width: '128px', height: '128px' }}
                        />
                    </Grid>

                    <Grid item xs={4} sm alignContent='center' container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item sm>
                                <Typography variant="subtitle1" component="div">
                                    {name}
                                </Typography>
                                <Typography variant="caption" component="div">
                                    {tags.reduce((acc, cur) => acc = `${acc}, ${cur}`)}
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={2} sx={{ minWidth: '30px', marginLeft: '4px' }}>
                        <Typography variant="caption" component="div">
                            ${price} per day
                        </Typography>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    )
}