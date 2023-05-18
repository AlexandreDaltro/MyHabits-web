import styles from './Button.module.css'
import React, { MouseEventHandler, ReactComponentElement, ReactElement, ReactNode } from 'react'
import { AiOutlinePlusSquare } from 'react-icons/ai'

type ButtonProps = {
  handleOnClick?: MouseEventHandler<HTMLElement>;
  tabIndex?: number;
  children: ReactNode;
  icon?: ReactElement;
  className?: string;
};

export function Button({ handleOnClick, children, tabIndex, icon, className }: ButtonProps) {
  return (
    <button className={` group flex items-center gap-2 p-2 ${className}`} onClick={handleOnClick} tabIndex={tabIndex} data-tab={tabIndex}>
      {icon}
      {children}
    </button>
  )
}
