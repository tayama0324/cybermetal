import {Title} from '../../components/Title'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <div>
      <Title
        title={'値段差10倍のメガネを買った話'}
        description={'タイトル通り'}
        author={'@kusano_k'}
        image={'/kusano/author.png'}
        twitter={'@kusano_k'}
      />
      <p>
        It works!
      </p>
    </div>
  )
}
