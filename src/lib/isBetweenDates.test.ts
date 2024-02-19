import dayjs from 'dayjs'
import { isBetweenDates } from './isBetweenDates'

describe("isBetweenDates", () => {
    test("between dates in startDate", () => {
        const datesToCheck = {
            startDate: dayjs("2024-1-20"),
            endDate: dayjs("2024-1-23"),
        }
        const datesToValidate = {
            startDate: dayjs("2024-1-16"),
            endDate: dayjs("2024-1-20"),
        }

        expect(isBetweenDates(datesToCheck, datesToValidate)).toBeTruthy()
    })

    test("between dates in endDate", () => {
        const datesToCheck = {
            startDate: dayjs("2024-1-20"),
            endDate: dayjs("2024-1-23"),
        }
        const datesToValidate = {
            startDate: dayjs("2024-1-22"),
            endDate: dayjs("2024-1-25"),
        }

        expect(isBetweenDates(datesToCheck, datesToValidate)).toBeTruthy()
    })

    test("not between dates", () => {
        const datesToCheck = {
            startDate: dayjs("2024-1-20"),
            endDate: dayjs("2024-1-23"),
        }
        const datesToValidate = {
            startDate: dayjs("2024-1-16"),
            endDate: dayjs("2024-1-19"),
        }

        expect(isBetweenDates(datesToCheck, datesToValidate)).toBeFalsy()
    })
})