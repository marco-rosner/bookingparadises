import { Card, CardContent, CardHeader, Grid } from "@mui/material"
import React from "react"
import { usePlaces } from "../../hooks/usePlaces"
import { TinyCard } from "../TinyCard/TinyCard"
import { TinyTrackSkeleton } from "./TinyTrackSkeleton"

interface TrackInterface {
    title: string
}

export const TinyTrack = ({ title }: TrackInterface): React.ReactElement => {
    const { data: places, loading } = usePlaces()

    return (
        <Card variant="outlined" sx={{ background: '#e6d6bf', border: "none" }}>
            {loading ?
                (<TinyTrackSkeleton />) :
                (
                    <>
                        <CardHeader
                            sx={{ paddingBottom: '0px' }}
                            title={title}
                            titleTypographyProps={{
                                display: "flex",
                                justifyContent: "flex-start",
                                paddingLeft: "30px"
                            }} />
                        <CardContent>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {places.map(item => (
                                    <TinyCard
                                        key={item.id}
                                        name={item.name}
                                        tag={item.tag}
                                        img={item.img}
                                        price={item.price} />
                                ))}
                            </Grid>
                        </CardContent>
                    </>
                )}
        </Card>
    )
}