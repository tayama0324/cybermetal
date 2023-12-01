import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import s from './Title.module.scss'

type Props = {
  title: string
  description: string
  author: string
  image: string
  misskey?: string
  twitter?: string
  website?: string
}

export const Title: React.FC<Props> = (props) => {
  return (
    <div className={s.main}>
      <h1 className={s.title}>{props.title}</h1>
      <p className={s.description}>{props.description}</p>
      <div className={s.author}>
        <img className={s.authorImage} src={props.image} />
        <span className={s.authorName}>{props.author}</span>
        {props.misskey && (<p className={s.authorMisskey}><img src={'/2023/misskey.jpg'} />{props.misskey}</p>)}
        {props.twitter && (<p className={s.authorTwitter}><FontAwesomeIcon icon={faTwitter} fixedWidth />{props.twitter}</p>)}
        {props.website && (<p className={s.authorWebsite}><FontAwesomeIcon icon={faGlobe} fixedWidth />{props.website}</p>)}
      </div>
    </div>
  )
}
