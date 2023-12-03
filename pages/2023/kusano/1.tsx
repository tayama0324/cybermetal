import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={999}>
      <Title
        title={'ルービックキューブの話'}
        description={'今年1年間ハマっていた。'}
        author={'kusano_k'}
        image={'/2023/author/kusano.png'}
        twitter={'@kusano_k'}
        // website={'https://wwww.dev'}
      />
      <p>「サイバーメタルチンピラ合同誌2022」を頒布した前々回のコミケの後、帰省して暇をしていたら、ふとルービックキューブを回したくなった。数年おきにルービックキューブのマイブームが訪れる。東京に戻ってきてすぐに新しいルービックキューブを買い、そのまま今年1年はルービックキューブにハマっていた。ということで、ルービックキューブの話を書く。この記事を読んだ後にルービックキューブをポチってくれる人がいると嬉しい。</p>
      <Image href={'/2023/kusano/image.jpg'} description={'私のコレクション。'} widthPercentage={80} />
      <p>なお、「ルービックキューブ」はメガハウスの登録商標であり、一般名称としては単に「キューブ」と呼ばれる。そのため、以降は「キューブ」と書くことにする。</p>
      <h2>何が楽しいのか？</h2>
      <p>知的好奇心とか、練習して上達するのが楽しいとか、人に自慢できるとかがあるけれど、私の場合は単純に回していて楽しいというのが大きい。一昔前に流行ったハンドスピナーに近い。ちょっと息抜きをしたいときに回している。昔キューブを触ったことがある人だと、引っ掛かって上手く回せなかったという印象があるだろうけれど、最近のキューブはとてもスムーズに回ってストレスが無い。</p>
    </Pagination>
  )
}
