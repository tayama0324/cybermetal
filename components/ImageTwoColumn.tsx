import * as React from 'react'
import s from './ImageTwoColumn.module.scss'
import {PropsWithChildren} from 'react'
import {Image} from './Image'

type Props = {
  href: string
}

export const ImageTwoColumn: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    <div className={s.main}>
      <Image href={props.href} widthPercentage={100} />
      <div className={s.description}>{props.children}</div>
    </div>
  )
}
