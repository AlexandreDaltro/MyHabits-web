import { daysRangeFromDateToNow } from "../utils/dates";
import HabitDay from "./HabitDay";
import dayjs from 'dayjs'
import HabitDayPlaceHolder from "./HabitDayPlaceHolder";


const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const startOfYear = dayjs().startOf('year').toString()
const gridDates = daysRangeFromDateToNow(startOfYear)

const minimumGridDatestoShow = 21 * 7
const remainingDaysToFill = minimumGridDatestoShow - gridDates.length

export function GridDates() {
    return (
        <div id="grids-container" className='flex w-full'>
            <div id="days-col" className='grid grid-rows-7 grid-flow-col gap-3'>
                {weekDays.map((weekday, i) => (
                    <div key={`${weekday}${i}`} className='w-10 h-10 font-bold flex items-center  justify-center'>
                        {weekday}
                    </div>
                ))
                }
            </div>
            <div className='grid grid-rows-7 grid-flow-col gap-3'>
                {gridDates.map((date) => (
                    <HabitDay key={date.toString()} completed={4} />
                ))}
                {remainingDaysToFill > 0 &&
                    Array.from({ length: remainingDaysToFill }).map((_, i) => (
                        <HabitDayPlaceHolder key={i} />
                    ))
                }
            </div>

        </div>
    )
}