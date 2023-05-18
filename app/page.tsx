'use local'
import { GridDates } from './components/GridDates'
import HabitDay from './components/HabitDay'
import { Header } from './components/Header'
import { Button } from './components/layout/ButtonWithIcon'
import { AiOutlinePlus } from 'react-icons/ai'



export default function Home() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full  max-w-5xl px-6 flex flex-col bg-gray-900 gap-16 '>
        <Header />
        <GridDates/>
      </div>
    </div>
  )
}
