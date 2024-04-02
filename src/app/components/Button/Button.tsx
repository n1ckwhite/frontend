import { ButtonHTMLAttributes, FC } from 'react'
import cn from 'classnames'

import s from './Button.module.css'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  classname?: string;
}

export const Button: FC<IButtonProps> = ({
  text,
  classname,
  ...props
}) => (
  <div className={cn(s.btn__tg, classname)}>
    <button className={s.button} {...props}>{text}</button>
  </div>
)
