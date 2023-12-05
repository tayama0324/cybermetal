import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={999}>
      <h2>にじジャーニーの使い方</h2>
      <h3>にじジャーニー公式Discordサーバーへの参加</h3>
      <p>にじジャーニーのUIはDiscordベースで提供されており、公式サイトのサインインボタンから、にじジャーニー公式Discordサーバーに参加する必要があります。</p>
      <p>にじジャーニー公式サイト https://nijijourney.com/ja/</p>
      <Image href={'/2023/kuri/kuri2.png'} description={'公式サイトTOP'} widthPercentage={70} />
      <p>参加後、規約への同意やチュートリアルなどがあるかもしれませんので、同意したり適当にこなしておきます。ちなみに生成画像の商用利用は有料プランへの登録で可能になります。スマホアプリなどもあるので、モバイル端末からも利用することができます。</p>
      <h3>にじジャーニーでの画像生成</h3>
      <p>Discordの「画像生成」カテゴリのチャンネルにて、『/imagine prompt {'{生成したい画像のキーワード}'}』 を入力します。（promptは自動で入力されます）プロンプトに入力するキーワードは日本語でも大丈夫です。</p>
      <div style={{display: 'flex'}}>
        <Image href={'/2023/kuri/kuri3.png'} description={'画像生成カテゴリ'} widthPercentage={30}  />
        <Image href={'/2023/kuri/kuri4.png'} description={'/imagine prompt {生成したい画像のキーワード} のフォーマットでプロンプトを入力'} widthPercentage={65} />
      </div>
    </Pagination>
  )
}
