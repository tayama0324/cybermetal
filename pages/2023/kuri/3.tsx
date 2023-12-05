import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={999}>
      <Image href={'/2023/kuri/kuri5.png'} description={'生成された画像'} widthPercentage={40} />
      <p>画像は2x2の1枚絵として出力され、後述するUI操作で切り出したり解像度を上げることができます。出力された画像は他人も見ることができますが、有料版のステルスモードを使えば隠せます。</p>
      <h3>画像の加工や再生成の方法</h3>
      <p>にじジャーニーで生成した画像は、UI上から解像度をあげたり再生成する仕組みが用意されています。生成した画像の下部にU1~U4、V1~V4、リサイクルマークのボタンがあり、それぞれ以下の動作となります。</p>
      <ul>
        <li>U1~U4：指定した画像を切りだして解像度をあげる(U1=左上、U2=右上、U3=左下、U4=右下)</li>
        <li>V1~V4：指定した画像を元に再生成を行う(V1=左上、V2=右上、V3=左下、V4=右下)</li>
        <li>リサイクルマーク：同じプロンプトで再生成を行う</li>
      </ul>
      <Image href={'/2023/kuri/kuri6.png'} description={'基本の加工UI'} widthPercentage={50} />
      <p>切り出した画像と一緒に下記のようなUIが出てきますが、おそらく数ヶ月おきに変わったりして、本に書いてもしょうがないので自分で試してください。</p>
      <Image href={'/2023/kuri/kuri7.png'} description={'切り出した後の追加の加工UI'} widthPercentage={75} />
    </Pagination>
  )
}
