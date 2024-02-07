import React from "react"
import { places } from "../../mock/places"
import { HighlightTrack } from "../HighlightTrack/HighlightTrack"
import { TinyTrack } from "../TinyTrack/TinyTrack"

export const BookingsBody = (): React.ReactElement => {
    return (
        <>
            <HighlightTrack places={places} />
            <TinyTrack title="Recent" places={places} />
            <HighlightTrack title="Promotions" places={places} />
        </>
    )
}