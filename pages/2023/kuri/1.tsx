import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={999}>
      <Title
        title={'身の回りのものをAIで美少女化したら楽しかった件'}
        description={'AIで遊んでると時間解ける、マジで。'}
        author={'kuri'}
        image={'/2023/author/kuri.jpg'}
        twitter={'@hakoeda'}
      />
      <h2>はじめに</h2>
      <p>最近は画像生成AIで遊ぶのが楽しいので、自分の身の回りのキーワードを集めて美少女を生成してもらいます。</p>
      <p>StableDiffusion、Mid Journey、DALL-E3と有名なものはたくさんありますが、今回のテーマ的には日本語のプロンプトで簡単に美少女イラストが手に入る『にじジャーニー（niji Journey）』がぴったりだったので、にじジャーニーのみで生成しています。</p>
      <p>※ 掲載しているUIおよび出力結果は本稿が執筆された2023年12月4日時点のものです。</p>
      <h2>にじジャーニーとは</h2>
      <p>にじジャーニーは「Midjourney」をベースに作られた画像生成AIです。基本無料でお手軽に、以下のようなハイクオリティなイラストを出力することができます。</p>
      <Image href={'/2023/kuri/kuri1.png'} widthPercentage={90} />
      <p>名前の通り二次元イラストに特化していて、日本語入力に対応している点が強みです。無料版では1日に最大25件の生成が行えます。</p>
    </Pagination>
  )
}
