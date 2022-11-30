import {Title} from '../../components/Title'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <div>
      <Title
        title={'未定'}
        description={'早くない自転車競技'}
        author={'おめが'}
        image={'/omega/author.png'}
        twitter={'@omegamega'}
        website={'https://o-mega.sakura.ne.jp/'}
      />
      <p>
        It works!
      </p>
    </div>
  )
}
