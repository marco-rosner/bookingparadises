import { Card, CardContent, CardHeader, Grid } from "@mui/material"
import React from "react"
import { usePlaces } from "../../hooks/usePlaces"
import { HighlightCard } from "../HighlightCard/HighlightCard"
import { ContentSkeleton } from "./ContentSkeleton"
import { TitleSkeleton } from "./TitleSkeleton"

interface TrackInterface {
    title?: string
}

export const HighlightTrack = ({ title }: TrackInterface): React.ReactElement => {
    const { data: places, loading } = usePlaces()

    return (
        <Card variant="outlined" sx={{ background: '#e6d6bf', border: "none" }}>
            {title && (loading ?
                (<TitleSkeleton />) :
                (
                    <CardHeader
                        sx={{ paddingBottom: '0px' }}
                        title={title}
                        titleTypographyProps={{
                            display: "flex",
                            justifyContent: "flex-start",
                            paddingLeft: "30px"
                        }}
                    />
                ))
            }
            <CardContent>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {loading ?
                        (<ContentSkeleton />) :
                        (
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