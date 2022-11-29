import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import s from './Title.module.scss'

type Props = {
  title: string
  description: string
  author: string
  twitter?: string
  website?: string
}

export const Title: React.FC<Props> = (props) => {
  return (
    <div className={s.main}>
      <h1 className={s.title}>{props.title}</h1>
      <p className={s.description}>{props.description}</p>
      <p className={s.author}>
        <span className={s.authorName}><FontAwesomeIcon icon={faUser} fixedWidth />{props.author}</span>
        {props.twitter && (<span className={s.authorTwitter}><FontAwesomeIcon icon={faTwitter} fixedWidth />{props.twitter}</span>)}
        {props.website && (<span className={s.authorWebsite}><FontAwesomeIcon icon={faGlobe} fixedWidth />{props.website}</span>)}
      </p>
    </div>
  )
}
