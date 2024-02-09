import { HighlightTrack } from "../../components/HighlightTrack/HighlightTrack"
import { TinyTrack } from "../../components/TinyTrack/TinyTrack"
import { places } from "../../mock/places"

export const HomeView = (): React.ReactElement => {
    return (
        <>
            <HighlightTrack places={places} />
            <TinyTrack title="Recent" places={places} />
            <HighlightTrack title="Promotions" places={places} />
        </>
    )
}