import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={17}>
      <Title
        title={'値段差10倍のメガネを買った話'}
        description={'果たして値段分の差はあるのだろうか'}
        author={'@kusano_k'}
        image={'/2022/kusano/author.png'}
        twitter={'@kusano_k'}
      />
      <p>
        金子眼鏡店の78,100円のメガネと、JINSの8,800円のメガネです。
        計算してみると8.9倍なので、ちょっとタイトル詐欺です。
        それぞれのメガネを買ったときの話と、簡単な比較を書きます。
      </p>
      <Image
        href={'/kusano/fig1.jpg'}
        description={'金子眼鏡店の78,100円のメガネ（左）とJINSの8,800円のメガネ（右）。'}
      />
      <h2>自己紹介</h2>
      <p>
        メガネは幼稚園児の頃から30年以上掛けています。
        コンタクトレンズは一度も眼に入れたことがありません。
      </p>
      <p>
        今回改めて測ってもらった結果、右眼のレンズが-7.25Dで、左眼のレンズが-7.50Dになりました。
        強度の近視です。
        若干の乱視も入っています。
        裸眼だと、視力検査表の一番上のＣも全く見えません。
        ちなみに、それでどのようにして視力を測るのかというと、看護師がＣの書かれたカードを手に持って、立つ位置を変えながら「これはどっち向き？」と訊いてきました。
        裸眼視力は久しく測っていないので、今はどうなのか分かりません。
        健康診断の視力測定は、スティックの付いた機械でしたが、あれならとても視力が悪くても測れるのでしょうか？
      </p>
    </Pagination>
  )
}
