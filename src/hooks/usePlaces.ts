import { useState } from "react";
import { Place, places } from "../mock/places";

interface usePlacesInterface {
    loading: boolean;
    error: boolean;
    data: Place[]
}

export const usePlaces = (): usePlacesInterface => {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [data, setData] = useState<Place[]>([])

    // Mocking backend request
    const min = 1000
    const max = 3000
    const timeout = Math.random() * (min - max) + min
    const backendService = new Promise<Place[]>(
        (resolve) => setTimeout(() => resolve(places), timeout)
    );

    backendService.then(() => {
        setLoading(false)
        setError(false)
        setData(places)
    }).catch(() => {
        setLoading(false)
        setError(true)
    })

    return { loading, error, data }
}