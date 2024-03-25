import { HighlightTrack, TinyTrack } from "../../components";
import { useTranslation } from 'react-i18next'
import { useEffect } from "react";

export const HomeView = (): React.ReactElement => {
    const { t, i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage('en-US') // default language
    }, [])

    return (
        <>
            <HighlightTrack />
            <TinyTrack title={t("home.title.tinyTrack")} />
            <HighlightTrack title={t("home.title.highlightTrack")} />
        </>
    )
}