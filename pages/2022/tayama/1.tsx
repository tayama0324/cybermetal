import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={5}>
      <Title
        title={'なぜ人は575が好きなのか'}
        description={'俳句のリズムを心地よく感じる理由を言語・音楽の見地から説明します'}
        author={'tayama0324'}
        image={'/2022/tayama/author.jpg'}
        twitter={'@tayama0324'}
      />
      <Image href={'/2022/tayama/0.png'} widthPercentage={50} />
      <p>
        夏草や、兵どもが夢の跡。五月雨をあつめて早し最上川 [^1]。俳句は良いものですね。日本語話者たるもの、必ずしも俳句を積極的に詠んだり鑑賞したりする人ばかりではないにせよ、俳句が全くもって嫌いだという人はなかなかいないのではないでしょうか。俳句、あるいは川柳、短歌には五・七・五（・七・七）という形式があり、この韻律に従って読み上げるとなんとも言えない心地よさ、収まりの良さを感じられます。
      </p>
      <p>
        五・七・五はなぜ心地よいのでしょうか。この記事は、その理由を日本語の音韻論的特性とリズムの音楽的特性から説明します。なお、これは筆者の独自研究であり、専門的知識に裏付けされたものではないことをあらかじめご了承ください。
      </p>
    </Pagination>
  )
}
