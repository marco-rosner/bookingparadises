import { renderHook } from "@testing-library/react"
import { SERVER_PATH } from "../constant"
import { usePromotions } from "./usePromotions"

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(["test"])
    })
) as jest.Mock

describe("usePromotions", () => {
    test("initial values", () => {
        const { result } = renderHook(() => usePromotions())

        expect(result.current).toEqual({ loading: true, error: false, data: [] })
    })

    test("with mock", async () => {
        const { result } = renderHook(() => usePromotions())

        await new Promise((r) => setTimeout(r, 3000));

        expect(result.current).toEqual({ loading: false, error: false, data: ["test"] })
        expect(fetch).toHaveBeenCalledWith(`${SERVER_PATH}/promotions`)
    })
})