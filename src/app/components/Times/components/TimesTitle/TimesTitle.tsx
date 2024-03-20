import { FC } from 'react'

import s from './TimesTitle.module.css'

interface ITitle {
  text: string;
  textColor: string;
  textColorTwo?: string;
}

export const TimesTitle: FC<ITitle> = ({ text, textColor, textColorTwo }) => (
  <div className={s.title__mobile}>
    <p className={s.text}>
      {text}
      <span className={s.colorText}>{textColor}</span>
    </p>
    <p className={s.colorText}>{textColorTwo}</p>
  </div>

)