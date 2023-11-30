import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={999}>
      <Title
        title={'タイトルタイトル'}
        description={'一行概要はここに記載されますのだ！'}
        author={'冬椿'}
        image={'/2023/author/fuyutsubaki.png'}
        // twitter={'@nanocloudx'}
        // website={'https://wwww.dev'}
      />
      <h2>てすとだよ</h2>
      <p>
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
      </p>
    </Pagination>
  )
}
