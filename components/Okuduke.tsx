import * as React from 'react'
import s from './Okuduke.module.scss'

type Props = {

}

export const Okuduke: React.FC<Props> = (props) => {
  return (
    <div className={s.main}>
      <h2>サイバーメタルチンピラ合同誌2022</h2>
      <dl>
        <div>
          <dt>発行日</dt>
          <dd>2022年12月31日 / コミックマーケット101</dd>
        </div>
        <div>
          <dt>発行者</dt>
          <dd>サイバーメタルチンピラ一同</dd>
        </div>
        <div>
          <dt>連絡先</dt>
          <dd>nanocloudx@gmail.com</dd>
        </div>
        <div>
          <dt>印刷所</dt>
          <dd>株式会社栄光</dd>
        </div>
      </dl>
    </div>
  )
}
