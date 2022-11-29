import {Title} from '../../components/Title'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <div>
      <Title
        title={'秋葉原に10年ぐらい住んでみた'}
        description={'にーこにっこどーが！にーこにっこどーが！'}
        author={'なのくろ'}
        image={'/nanocloudx/author.jpeg'}
        twitter={'@nanocloudx'}
        website={'https://wwww.dev'}
      />
      <p>Welcome to underground...</p>
      <Image href={'/nanocloudx/farewell-akihabara.webp'} description={'懐かしき景色'} />
      <h2>ポラーノの広場</h2>
      <p>
        あの<strong>イーハトーヴォ</strong>のなんちゃらかんちゃら
      </p>
      <p>あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。</p>
      <small>イーハトーヴォってなんやねん</small>
    </div>
  )
}
