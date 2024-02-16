import { Card, CardContent, CardHeader, Grid } from "@mui/material"
import React from "react"
import { useProperties } from "../../hooks"

import { TinyCard } from "../TinyCard/TinyCard"
import { TinyTrackSkeleton } from "./TinyTrackSkeleton"

interface TrackInterface {
    title: string
}

export const TinyTrack = ({ title }: TrackInterface): React.ReactElement => {
    const { data: properties, loading } = useProperties()

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
                                {properties.slice(3,6).map(property => (
                                    <TinyCard key={property.id} property={property} />
                                ))}
                            </Grid>
                        </CardContent>
                    </>
                )}
        </Card>
    )
}