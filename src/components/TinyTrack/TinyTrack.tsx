import { Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material"
import React from "react"
import { usePlaces } from "../../hooks/usePlaces"
import { TinyCard } from "../TinyCard/TinyCard"

interface TrackInterface {
    title: string
}

export const TinyTrack = ({ title }: TrackInterface): React.ReactElement => {
    const { data: places, loading } = usePlaces()

    return (
        <Card variant="outlined" sx={{ background: '#e6d6bf', border: "none" }}>
            {loading ? (
                <>
                    <Skeleton width="30%" sx={{ marginLeft: '30px', fontSize: '2rem' }} />
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Skeleton
                                variant="rectangular"
                                sx={{ maxWidth: "350px", margin: "20px" }}
                                width={350}
                                height={150}
                            />
                            <Skeleton
                                variant="rectangular"
                                sx={{ maxWidth: "350px", margin: "20px" }}
                                width={350}
                                height={150}
                            />
                            <Skeleton
                                variant="rectangular"
                                sx={{ maxWidth: "350px", margin: "20px" }}
                                width={350}
                                height={150}
                            />
                        </Grid>
                    </CardContent>
                </>
            ) : (
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