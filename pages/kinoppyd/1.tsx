import {Title} from '../../components/Title'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <div>
      <Title
        title={'お酒を蒸留するということ'}
        description={'お酒を蒸留する方法や効果はいろいろあるんだねって話'}
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
