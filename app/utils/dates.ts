import dayjs from "dayjs";

export function daysRangeFromDateToNow(startDate : string){

    const startFromDate = dayjs(startDate)
    const today = new Date()

    const dates = []
    let compareDate = startFromDate

    while(compareDate.isBefore(today)){
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }
    

    return dates
}

daysRangeFromDateToNow('2023-04-17')