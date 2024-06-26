import { FC } from 'react'
import cn from 'classnames'

import s from './HeaderTask.module.css'

interface IHeaderTaskProps {
  text: string
  background?: 'default' | 'green' | 'gray'
}

export const HeaderTask: FC<IHeaderTaskProps> = ({ background, text }) => (
  <p
    className={cn(
      s.btn,
      background === 'gray'
      && s.gray__back__btn,
      background === 'green'
      && s.green__back__btn,
    )}
  >
    { text }
  </p>
)
