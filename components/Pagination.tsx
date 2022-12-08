import * as React from 'react'
import s from './Pagination.module.scss'
import {PropsWithChildren} from 'react'

type Props = {
  page: number
}

export const Pagination: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    <div className={s.main}>
      {props.children}
      <p className={s.page}>{props.page}</p>
    </div>
  )
}
