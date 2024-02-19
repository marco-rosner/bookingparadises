import { renderHook } from "@testing-library/react"
import { places } from "../mock/places"
import { usePlaces } from "./usePlaces"


describe("usePlaces", () => {
    test("initial values", () => {
        const { result } = renderHook(() => usePlaces())

        expect(result.current).toEqual({ loading: true, error: false, data: [] })
    })

    test("with mock", async () => {
        const { result } = renderHook(() => usePlaces())

        await new Promise((r) => setTimeout(r, 3000));

        expect(result.current).toEqual({ loading: false, error: false, data: places })
    })
})