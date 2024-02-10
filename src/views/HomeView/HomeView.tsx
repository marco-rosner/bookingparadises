import { HighlightTrack } from "../../components/HighlightTrack/HighlightTrack"
import { TinyTrack } from "../../components/TinyTrack/TinyTrack"

export const HomeView = (): React.ReactElement => {
    return (
        <>
            <HighlightTrack />
            <TinyTrack title="Recent" />
            <HighlightTrack title="Promotions" />
        </>
    )
}