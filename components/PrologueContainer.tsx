import * as React from 'react'
import s from './PrologueContainer.module.scss'
import {PropsWithChildren} from 'react'

export const PrologueContainer: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className={s.main}>
      {props.children}
    </div>
  )
}
