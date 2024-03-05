import { useEffect, useState } from "react";
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
        fetch('http://localhost:8080/promotions')
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