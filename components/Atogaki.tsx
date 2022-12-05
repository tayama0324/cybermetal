import * as React from 'react'
import s from './Atogaki.module.scss'

type Props = {
  author: string
  image: string
  message: string
}

export const Atogaki: React.FC<Props> = (props) => {
  return (
    <div className={s.main}>
      <img className={s.image} src={props.image} />
      <div>
        <p className={s.author}>{props.author}</p>
        <p className={s.message}>{props.message}</p>
      </div>
    </div>
  )
}
