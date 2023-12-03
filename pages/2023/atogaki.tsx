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
        <p style={{textAlign: 'right'}}>編集担当</p>
      </div>
      <div style={{marginTop: '1rem'}}>
        <h2>著者からひとこと</h2>
        <div>
          <Atogaki author={'だいちろ'} image={'/2023/author/daichiro.png'} message={'ダミーですダミーですダミーですダミーです'} />
          <Atogaki author={'kinoppyd'} image={'/2023/author/kinoppyd.jpg'} message={'ダミーですダミーですダミーですダミーです'} />
          <Atogaki author={'ryudo'} image={'/2023/author/ryudo.jpg'} message={'ダミーですダミーですダミーですダミーです'} />
          <Atogaki author={'きすちぃ'} image={'/2023/author/quisty.jpg'} message={'サイバーメタルチンピラ体験、とても楽しかったです！'} />
          <Atogaki author={'kuri'} image={'/2023/author/kuri.jpg'} message={'ダミーですダミーですダミーですダミーです'} />
          <Atogaki author={'冬椿'} image={'/2023/author/fuyutsubaki.png'} message={'ダミーですダミーですダミーですダミーです'} />
          <Atogaki author={'happo31'} image={'/2023/author/happo31.jpg'} message={'ダミーですダミーですダミーですダミーです'} />
          <Atogaki author={'kusano_k'} image={'/2023/author/kusano.png'} message={'ダミーですダミーですダミーですダミーです'} />
          <Atogaki author={'tayama0324'} image={'/2023/author/tayama.jpg'} message={'ダミーですダミーですダミーですダミーです'} />
          <Atogaki author={'なのくろ'} image={'/2023/author/nanocloudx.jpg'} message={'ダミーですダミーですダミーですダミーです'} />
          <Atogaki author={'ながいたん'} image={'/2023/author/nagaitan.jpg'} message={'ダミーですダミーですダミーですダミーです'} />
          <Atogaki author={'匿名チンピラ（埼玉県在住）'} image={'/2023/author/shodai.jpg'} message={'ダミーですダミーですダミーですダミーです'} />
        </div>
      </div>
    </Pagination>
  )
}
