import { useState } from "react";
import { Promotion, promotions } from "../mock/promotions";

interface usePromotionsInterface {
    loading: boolean;
    error: boolean;
    data: Promotion[]
}

export const usePromotions = (): usePromotionsInterface => {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [data, setData] = useState<Promotion[]>([])

    // Mocking backend request
    const min = 1000
    const max = 3000
    const timeout = Math.random() * (min - max) + min
    const backendService = new Promise<Promotion[]>(
        (resolve) => setTimeout(() => resolve(promotions), timeout)
    );

    backendService.then(() => {
        setLoading(false)
        setError(false)
        setData(promotions)
    }).catch(() => {
        setLoading(false)
        setError(true)
    })

    return { loading, error, data }
}