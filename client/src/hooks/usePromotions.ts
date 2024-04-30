import { useEffect, useState } from "react";
import { SERVER_PATH } from "../constant";
import { Promotion } from "../types";

interface usePromotionsInterface {
    loading: boolean;
    error: boolean;
    data: Promotion[]
}

export const usePromotions = (): usePromotionsInterface => {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [data, setData] = useState<Promotion[]>([])

    useEffect(() => {
        fetch(`${SERVER_PATH}/promotions`)
            .then((data) => data.json())
            .then((promotions) => {
                setLoading(false)
                setError(false)
                setData(promotions)
            }).catch(() => {
                setLoading(false)
                setError(true)
            })
    }, [])

    return { loading, error, data }
}