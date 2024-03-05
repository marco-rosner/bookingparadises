import { renderHook } from "@testing-library/react"
import { useNextId } from "./useNextId"

describe("useNextId", () => {
    test("check next id result", () => {
        const { result } = renderHook(() => useNextId())

        expect(result.current).toEqual({ "nextId": 123842 })
    })
})