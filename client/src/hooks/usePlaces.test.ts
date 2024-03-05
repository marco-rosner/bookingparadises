import { renderHook } from "@testing-library/react"
import { usePlaces } from "./usePlaces"

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(["test"])
    })
) as jest.Mock

describe("usePlaces", () => {
    test("initial values", () => {
        const { result } = renderHook(() => usePlaces())

        expect(result.current).toEqual({ loading: true, error: false, data: [] })
    })

    test("with mock", async () => {
        const { result } = renderHook(() => usePlaces())

        await new Promise((r) => setTimeout(r, 3000));

        expect(result.current).toEqual({ loading: false, error: false, data: ["test"] })
        expect(fetch).toHaveBeenCalledWith("http://localhost:8080/places")
    })
})