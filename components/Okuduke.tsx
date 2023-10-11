import * as React from 'react'
import s from './Okuduke.module.scss'

type Props = {
  title: string
  publishDate: string
  publishEvent: string
  publisher: string
  contact: string
  printer: string
}

export const Okuduke: React.FC<Props> = (props) => {
  return (
    <div className={s.main}>
      <h2>{props.title}</h2>
      <dl>
        <div>
          <dt>発行日</dt>
          <dd>{props.publishDate} / {props.publishEvent}</dd>
        </div>
        <div>
          <dt>発行者</dt>
          <dd>{props.publisher}</dd>
        </div>
        <div>
          <dt>連絡先</dt>
          <dd>{props.contact}</dd>
        </div>
        <div>
          <dt>印刷所</dt>
          <dd>{props.printer}</dd>
        </div>
      </dl>
    </div>
  )
}
