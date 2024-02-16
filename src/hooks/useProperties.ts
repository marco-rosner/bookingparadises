import { useState } from "react";
import { Property, properties } from "../mock/properties";

interface usePropertiesInterface {
    loading: boolean;
    error: boolean;
    data: Property[]
}

export const useProperties = (): usePropertiesInterface => {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [data, setData] = useState<Property[]>([])

    // Mocking backend request
    const backendService = new Promise<Property[]>(
        (resolve) => resolve(properties)
    );

    backendService.then(() => {
        setLoading(false)
        setError(false)
        setData(properties)
    }).catch(() => {
        setLoading(false)
        setError(true)
    })

    return { loading, error, data }
}