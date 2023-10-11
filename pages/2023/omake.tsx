import {Pagination} from '../../components/Pagination'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <Pagination page={999}>
      <h2>おまけ</h2>
      <Image href={'/2022/daichiro-neko.jpg'} description={'サイバーメタルねこ'} widthPercentage={75} />
      <Image href={'/2022/ppyd-neko.jpg'} description={'サイバーメタルチンピラと対峙するねこ'} widthPercentage={75} />
      <Image href={'/2022/roomba-neko.jpg'} description={'人類もAIもねこには敵わない'} widthPercentage={75} />
    </Pagination>
  )
}
