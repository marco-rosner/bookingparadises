import dayjs from "dayjs"
import isBetween from "dayjs/plugin/isBetween"
import { StartEndDates } from "../types"

dayjs.extend(isBetween)

export const isBetweenDates = (datesToCheck: StartEndDates, datesToValidate: StartEndDates) => {
    const sDate = dayjs(datesToCheck.startDate).isBetween(datesToValidate.startDate, datesToValidate.endDate, "days", "(]")
    const eDate = dayjs(datesToCheck.endDate).isBetween(datesToValidate.startDate, datesToValidate.endDate, "days", "(]")

    return sDate || eDate
}