import {Title} from '../../components/Title'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <div>
      <Title
        title={'速くない自転車競技'}
        description={'へんてこ自転車に乗りたい欲がたかまるたかまる'}
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
