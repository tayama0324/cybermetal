import {Title} from '../../components/Title'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <div>
      <Title
        title={'未定'}
        description={'ウイスキーに興味を持った'}
        author={'kinoppyd'}
        image={'/kinoppyd/author.jpeg'}
        twitter={'@GhostBrain'}
        website={'https://kinoppyd.dev'}
      />
      <p>
        It works!
      </p>
    </div>
  )
}
