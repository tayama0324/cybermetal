import {Title} from '../../components/Title'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <div>
      <Title
        title={'なぜ人は575が好きなのか'}
        description={'俳句のリズムを心地よく感じる理由を言語・音楽の見地から説明します'}
        author={'tayama0324'}
        image={'/tayama/author.jpg'}
        twitter={'@tayama0324'}
      />
      <p>
        It works!
      </p>
    </div>
  )
}
