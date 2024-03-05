import { useEffect, useState } from "react";
import { Place } from "../types";

interface usePlacesInterface {
    loading: boolean;
    error: boolean;
    data: Place[]
}

export const usePlaces = (): usePlacesInterface => {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [data, setData] = useState<Place[]>([])

    useEffect(() => {
        fetch('http://localhost:8080/places')
            .then((data) => data.json())
            .then((places) => {
                setLoading(false)
                setError(false)
                setData(places)
            }).catch(() => {
                setLoading(false)
                setError(true)
            })
    }, [])

    return { loading, error, data }
}