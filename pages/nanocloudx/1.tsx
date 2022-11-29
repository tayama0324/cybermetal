import {Title} from '../../components/Title'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <div>
      <Title
        title={'秋葉原に10年ぐらい住んでみた'}
        description={'人生って難しいよね・・・'}
        author={'なのくろ'}
        twitter={'@nanocloudx'}
        website={'https://wwww.dev'}
      />
      <p>Welcome to underground...</p>
      <Image href={'/nanocloudx/farewell-akihabara.webp'} description={'懐かしき景色'} />
      <p>Welcome to underground...</p>
    </div>
  )
}
