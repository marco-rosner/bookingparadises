import { HighlightTrack, TinyTrack } from "../../components";

export const HomeView = (): React.ReactElement => (
    <>
        <HighlightTrack />
        <TinyTrack title="Recent" />
        <HighlightTrack title="Promotions" />
    </>
)