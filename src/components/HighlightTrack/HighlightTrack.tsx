import { Card, CardContent, CardHeader, Grid } from "@mui/material"
import React from "react"
import { Place } from "../../mock/places"
import { HighlightCard } from "../HighlightCard/HighlightCard"

interface TrackInterface {
    places: Place[],
    title?: string
}


export const HighlightTrack = ({ places, title }: TrackInterface): React.ReactElement => {
    return (
        <Card variant="outlined" sx={{ background: 'lightgray', border: "none" }}>
            {title &&
                (<CardHeader
                    sx={{ paddingBottom: '0px' }}
                    title={title}
                    titleTypographyProps={{
                        display: "flex",
                        justifyContent: "flex-start",
                        paddingLeft: "30px"
                    }}
                />)}
            <CardContent>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {places.map(item => (
                        <HighlightCard
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            img={item.img}
                            price={item.price} />
                    ))}
                </Grid>
            </CardContent>
        </Card>
    )
}