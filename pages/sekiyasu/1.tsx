import {Title} from '../../components/Title'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <div>
      <Title
        title={'田舎に引っ越したので自動車を買った話'}
        description={'自動車を買ったときにあったあれこれの覚書'}
        author={'かえで@office_acer'}
        image={'/sekiyasu/author.jpeg'}
        twitter={'@office_acer'}
      />
      <p>
        It works!
      </p>
    </div>
  )
}
