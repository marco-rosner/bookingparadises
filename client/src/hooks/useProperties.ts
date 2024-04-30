import { useEffect, useState } from "react";
import { SERVER_PATH } from "../constant";
import { Property } from "../types";

interface usePropertiesInterface {
    loading: boolean;
    error: boolean;
    data: Property[]
}

export const useProperties = (): usePropertiesInterface => {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [data, setData] = useState<Property[]>([])

    useEffect(() => {
        fetch(`${SERVER_PATH}/properties`)
            .then((data) => data.json())
            .then((properties) => {
                setLoading(false)
                setError(false)
                setData(properties)
            }).catch(() => {
                setLoading(false)
                setError(true)
            })
    }, [])

    return { loading, error, data }
}