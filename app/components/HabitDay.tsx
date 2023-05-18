interface HabitProps {
  completed: number;
}

function HabitDay({completed}: HabitProps) {
  return (
    <div className="bg-gray-800 w-10 h-10 text-white rounded flex items-center justify-center border border-gray-600 cursor-pointer">{completed}</div>
  )
}

export default HabitDay