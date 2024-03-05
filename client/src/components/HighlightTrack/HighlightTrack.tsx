import React from "react"
import { Card, CardContent, CardHeader, Grid } from "@mui/material"

import { usePromotions } from "../../hooks"
import { HighlightCard } from "../HighlightCard/HighlightCard"
import { ContentSkeleton } from "./ContentSkeleton"
import { TitleSkeleton } from "./TitleSkeleton"

interface TrackInterface {
    title?: string
}

export const HighlightTrack = ({ title }: TrackInterface): React.ReactElement => {
    const { data: promotions, loading } = usePromotions()

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
                                    promotions.map(item => (
                                        <HighlightCard key={item.id} property={item.property} />
                                    ))
                                }
                            </>
                        )}
                </Grid>
            </CardContent>
        </Card >
    )
}