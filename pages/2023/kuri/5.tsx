import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'
import {ImageTwoColumn} from '../../../components/ImageTwoColumn'

export default function Page() {
  return (
    <Pagination page={999}>
      <h3>歌舞伎 芸者</h3>
      <ImageTwoColumn href={'/2023/kuri/kuri10.png'}>
        <p>筆者は銀座の歌舞伎座あたりで仕事をしていたことがあったので、歌舞伎チックな画像を生成してみました。和風で派手派手なイメージアートが生まれて大変満足です。手指の破綻などもないので、ポスターなどにもそのまま使えそうですね。</p>
      </ImageTwoColumn>
      <h3>銀座 ラグジュアリー</h3>
      <ImageTwoColumn href={'/2023/kuri/kuri11.png'}>
        <p>同じく前勤務地の「銀座」で生成してもらいました。高級商業区画のイメージを入れたかったので、「ラグジュアリー」をキーワードに追加。銀座インズあたりの街並みに似ていますね。キャラクターの頭身も高めで大人びており、休日に銀座へ買い物に来た富裕層の女性といった感じです。</p>
      </ImageTwoColumn>
      <h3>秋葉原 UDX</h3>
      <ImageTwoColumn href={'/2023/kuri/kuri12.png'}>
        <p>続いてはオタクの聖地「秋葉原」、情景としては「秋葉原UDX」あたりでお願いしてみました。ピンクの紙とパーカー、猫耳といかにもオタクにウケそうなキャラクターが生成されました。僕も大好きです。情景はなんとなくですがUDX感はありつつ、もう少し電気街やサブカル感のある建物や広告もあると嬉しかったのでプロンプトを間違えました。</p>
      </ImageTwoColumn>
    </Pagination>
  )
}
