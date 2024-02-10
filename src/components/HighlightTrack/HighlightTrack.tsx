import { Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material"
import React from "react"
import { usePlaces } from "../../hooks/usePlaces"
import { HighlightCard } from "../HighlightCard/HighlightCard"

interface TrackInterface {
    title?: string
}

export const HighlightTrack = ({ title }: TrackInterface): React.ReactElement => {
    const { data: places, loading } = usePlaces()

    return (
        <Card variant="outlined" sx={{ background: 'lightgray', border: "none" }}>
            {title && (loading ? (
                <Skeleton width="30%" sx={{ marginLeft: '30px', fontSize: '2rem'}} />
            ) : (
                <CardHeader
                    sx={{ paddingBottom: '0px' }}
                    title={title}
                    titleTypographyProps={{
                        display: "flex",
                        justifyContent: "flex-start",
                        paddingLeft: "30px"
                    }}
                />))
            }
            <CardContent>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {loading ? (
                        <>
                            <Skeleton
                                variant="rectangular"
                                sx={{ maxWidth: "350px", margin: "20px" }}
                                width={350}
                                height={252}
                            />
                            <Skeleton
                                variant="rectangular"
                                sx={{ maxWidth: "350px", margin: "20px" }}
                                width={350}
                                height={252}
                            />
                            <Skeleton
                                variant="rectangular"
                                sx={{ maxWidth: "350px", margin: "20px" }}
                                width={350}
                                height={252}
                            />
                        </>
                    ) : (
                        <>
                            {
                                places.map(item => (
                                    <HighlightCard
                                        key={item.id}
                                        name={item.name}
                                        description={item.description}
                                        img={item.img}
                                        price={item.price} />
                                ))
                            }
                        </>
                    )}
                </Grid>
            </CardContent>
        </Card >
    )
}