import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={999}>
      <Title
        title={'テスト記事'}
        description={'説明文だよ'}
        author={'著者の名前'}
        image={'/2022/nanocloudx/author.jpeg'}
        twitter={'@example'}
        website={'https://example.com'}
      />
      <Image href={'/2022/nanocloudx/1.jpg'} />
      <h2>てすとだよ</h2>
      <p>
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
      </p>
    </Pagination>
  )
}
