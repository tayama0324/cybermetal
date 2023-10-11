import {Atogaki} from '../../components/Atogaki'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={999}>
      <div>
        <h2>編集後記</h2>
        <p>
          あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
        </p>
        <p style={{textAlign: 'right'}}>編集担当 なのくろ</p>
      </div>
      <div style={{marginTop: '1rem'}}>
        <h2>著者からひとこと</h2>
        <div>
          <Atogaki author={'なのくろ'} image={'/2022/nanocloudx/author.jpeg'} message={'ダミーですダミーですダミーですダミーです'} />
        </div>
      </div>
    </Pagination>
  )
}
