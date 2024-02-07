import { Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Place } from "../../mock/places";

export const TinyCard = ({ name, tag, img, price }: Place): React.ReactElement => {
    return (
        <Card sx={{ maxWidth: "350px", margin: "20px" }}>
            <CardActionArea sx={{ padding: "10px" }} onClick={() => console.log('Highlight')}>
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
                                    {tag}
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={2} sx={{ minWidth: '30px', marginLeft: '4px' }}>
                        <Typography variant="caption" component="div">
                            ${price} per person
                        </Typography>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    )
}