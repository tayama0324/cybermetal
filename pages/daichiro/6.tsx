import {Title} from '../../components/Title'
import {Image} from '../../components/Image'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={34}>
      <p>
        最後に。
      </p>
      <p>
        <strong>
          THIS IS NOT FINANCIAL ADVICE, THIS IS NOT LEGAL ADVICE.
        </strong>
      </p>
      <p>
        文責: daichiro.eth (このアドレスに寄付も募集中です。)
      </p>
      <p>
        DYOR で WAGMI を目指していきましょう！次回は暗号資産を増やそう！の話です。
      </p>
      <h2>
        おまけ - 有名な NFT プロジェクト
      </h2>
      <Image
        href={'/daichiro/bayc.png'}
        description={'BAYC'}
        widthPercentage={25}
      />
      <p>
        Board Ape Yacht Club、通称 BAYC。
        この猿の絵が 1.8 億円です。
        ニュースだと過去には 3.3 億円のものもあったみたいです。
      </p>
      <Image
        href={'/daichiro/cryptopunks.png'}
        description={'CryptoPunks'}
        widthPercentage={25}
      />
      <p>
        コレクティブNFT＝ドット絵のイメージを作ったプロジェクト。
        最高売却額は27億円らしいですが、今の価値だと220億円です。
        初めは10万円台でした。夢がありますね。
      </p>
    </Pagination>
  )
}
