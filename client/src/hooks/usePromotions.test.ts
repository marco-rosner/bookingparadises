import { renderHook } from "@testing-library/react"
import { promotions } from "../mock/promotions"
import { usePromotions } from "./usePromotions"


describe("usePromotions", () => {
    test("initial values", () => {
        const { result } = renderHook(() => usePromotions())

        expect(result.current).toEqual({ loading: true, error: false, data: [] })
    })

    test("with mock", async () => {
        const { result } = renderHook(() => usePromotions())

        await new Promise((r) => setTimeout(r, 3000));

        expect(result.current).toEqual({ loading: false, error: false, data: promotions })
    })
})