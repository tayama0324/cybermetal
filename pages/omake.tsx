import {Pagination} from '../components/Pagination'
import {Image} from '../components/Image'

export default function Page() {
  return (
    <Pagination page={75}>
      <h2>おまけ</h2>
      <Image href={'/daichiro-neko.jpg'} description={'サイバーメタルねこ'} widthPercentage={75} />
      <Image href={'/ppyd-neko.jpg'} description={'サイバーメタルチンピラと対峙するねこ'} widthPercentage={75} />
      <Image href={'/roomba-neko.jpg'} description={'人類もAIもねこには敵わない'} widthPercentage={75} />
    </Pagination>
  )
}
