import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={56}>
      <Title
        title={'秋葉原に10年ぐらい住んでみた'}
        description={'僕の思い出'}
        author={'なのくろ'}
        image={'/2022/nanocloudx/author.jpeg'}
        twitter={'@nanocloudx'}
        website={'https://wwww.dev'}
      />
      <small>
        *この記事は2021年春に著者のブログで書いたものです。想定外にバズったので誌面化しました。<br />
      </small>
      <Image href={'/2022/nanocloudx/1.jpg'} />
      <h2>初めての秋葉原</h2>
      <p>
        私が初めて秋葉原に来たのは10歳の時。はっきりと覚えている。
        駅前にはまだバスケットコートがあった時代である。
      </p>
      <p>
        今は無き「LAOXザ・コンピュータ館」で Windows Me がインストールされた FMV BIBLO を購入した。
        おじいちゃんに初めて自らの意思でおねだりをして買ってもらった。
      </p>
      <p>
        パソコンを買ってもらった帰り道に「セキュリティソフトも買いたい！」と言ったら、自分で買っておいでと1万円ぐらい渡され、秋葉原という街に野放しにされた。
        当時10歳なので小学四年生である。自分で買い物はしたことがないし、地元は千葉県で自宅まで1時間は掛かる距離。突然ぽつんと秋葉原に立っていた。
        実質的にはじめてのおつかい状態で、おいおいまじかよ！？という感じではあったが、最高潮にテンションが高かったのは確かである。
      </p>
      <p>
        もともと幼少期から家電が大好きだったので、秋葉原という街は僕にとって天国のような街であった。
        ほとんど寄り道はしなかったが、街並みを眺めているだけでとにかく楽しすぎた。
        結局私はザ・コンに戻り、シマンテックの黄色いパッケージを無事購入。貴重な体験だった。
      </p>
    </Pagination>
  )
}
