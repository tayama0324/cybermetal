import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'
import {ImageTwoColumn} from '../../../components/ImageTwoColumn'

export default function Page() {
  return (
    <Pagination page={999}>
      <h2>サイバーメタルチンピラギャラリー</h2>
      <p>ここからは実際ににじジャーニーを利用して、筆者の身の回りにあるキーワードを擬人化、美少女化してみます。基本的なプロンプトは『アニメ 詳細なデティール ハイクオリティー {'{それぞれのキーワード}'} 女の子 アートポスター --ar 16:9』を入力しています。</p>
      <h3>サイバーメタルチンピラ</h3>
      <ImageTwoColumn href={'/2023/kuri/kuri8.png'}>
        <p>当書籍のタイトルにしてメインテーマである謎単語「サイバーメタルチンピラ」。よくわからない概念にもかかわらず、割と一発で理想的なイメージが生成されました。ハイカラなガスマスク、デジタルチックなガジェット、不良感を演出するピアス、どこをとっても立派なサイバーメタルチンピラです。本当にありがとうございました。</p>
      </ImageTwoColumn>
      <h3>すし〇んまい 芽ネギ お寿司</h3>
      <ImageTwoColumn href={'/2023/kuri/kuri9.png'}>
        <p>続いては身内で夜中に食べに行くことがある寿司チェーン店「すし〇んまい」のイメージ画像です。特に芽ネギのお寿司がおいしいのでプロンプトにも入れましたが、芽ネギ自体は出てきませんでした。全体がネギ色になったのでよしとします。お寿司チックなものは少ししかありませんが、軍艦がお椀と認識されている可能性があります。</p>
      </ImageTwoColumn>
    </Pagination>
  )
}
