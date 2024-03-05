import { useState } from "react";
import { properties } from "../mock/properties";
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

    // Mocking backend request
    const min = 1000
    const max = 3000
    const timeout = Math.random() * (min - max) + min
    const backendService = new Promise<Property[]>(
        (resolve) => setTimeout(() => resolve(properties), timeout)
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