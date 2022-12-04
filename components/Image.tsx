import * as React from 'react'
import s from './Image.module.scss'

type Props = {
  href: string
  description?: string
  widthPercentage?: number
}

export const Image: React.FC<Props> = (props) => {
  return (
    <div className={s.main} style={{width: `${props.widthPercentage}%` || '100%'}}>
      <img className={s.image} src={props.href} />
      {props.description && (<p className={s.description}>{props.description}</p>)}
    </div>
  )
}
