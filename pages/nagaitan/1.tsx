import {Title} from '../../components/Title'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <div>
      <Title
        title={'繁殖する技術'}
        description={'子どもをつくってみた話'}
        author={'ながいたん'}
        image={'/nagaitan/author.jpeg'}
      />
      <p>
        It works!
      </p>
    </div>
  )
}
