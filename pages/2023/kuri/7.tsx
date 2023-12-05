import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'
import {ImageTwoColumn} from '../../../components/ImageTwoColumn'

export default function Page() {
  return (
    <Pagination page={999}>
      <h3>ポーカー テキサスホールデム カジノ</h3>
      <ImageTwoColumn href={'/2023/kuri/kuri16.png'}>
        <p>最近流行っている「テキサスホールデム」のイメージイラストです。テーブルを囲んでチップとカードが散らばっている雰囲気がとても良いですね。詳細なディティールはまだまだといった所ですが、十分にテキサスホールデム感は伝わってきます。</p>
      </ImageTwoColumn>
      <h3>セーフティーネット 安心安全 遊び場</h3>
      <ImageTwoColumn href={'/2023/kuri/kuri17.png'}>
        <p>前職の同僚が集まっているコミュニティのキーワード「セーフティーネット」を表したイラストです。どのあたりがセーフティーなのか、何も安心安全な感じはありませんが、遊び場のイメージとしてはぴったりです。じっとみてたら上下がどちらかわからなくなり、錯視画像になっている可能性があります。ちなみに工事現場のイメージも生成されました。</p>
      </ImageTwoColumn>
      <h3>バ美肉 VTuber ボイスチェンジャー</h3>
      <ImageTwoColumn href={'/2023/kuri/kuri18.png'}>
        <p>一時期、身内でボイスチェンジャーを使ってバ美肉するというムーブメントがあったので、生成してもらいました。「ボイスチェンジャー」というキーワードからマイクやヘッドフォンが生成されていているようです。こんなかわいい顔して、誘っているような不敵な笑みを浮かべて、中身はいい歳したおじさんなんですよ、怖いですね。</p>
      </ImageTwoColumn>
    </Pagination>
  )
}
