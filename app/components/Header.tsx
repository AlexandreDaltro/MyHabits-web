import { AiOutlinePlus } from "react-icons/ai"
import { Button } from "./layout/ButtonWithIcon"
import logo from '../assets/logo.svg'
import Image from 'next/image'


export const Header = () => {
    return (
        <div id="header" className='flex w-full justify-around items-center '>
            <Image className='scale-75' src={logo} alt="logo" />
            <Button
                icon={<AiOutlinePlus size={25} className='text-violet-500 group-hover:animate-spin' />}
                className="border-violet-500 border rounded-md transition-all hover:border-violet-300">
                Novo Hábito
            </Button>
        </div>
    )
}