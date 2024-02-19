import { renderHook } from "@testing-library/react"
import { properties } from "../mock/properties"
import { useProperties } from "./useProperties"


describe("useProperties", () => {
    test("initial values", () => {
        const { result } = renderHook(() => useProperties())

        expect(result.current).toEqual({ loading: true, error: false, data: [] })
    })

    test("with mock", async () => {
        const { result } = renderHook(() => useProperties())

        await new Promise((r) => setTimeout(r, 3000));

        expect(result.current).toEqual({ loading: false, error: false, data: properties })
    })
})