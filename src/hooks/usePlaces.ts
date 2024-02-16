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
    const backendService = new Promise<Place[]>((resolve) => resolve(places));

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