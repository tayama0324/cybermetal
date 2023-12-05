import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'
import {ImageTwoColumn} from '../../../components/ImageTwoColumn'

export default function Page() {
  return (
    <Pagination page={999}>
      <h3>龍道会 極道 宴会</h3>
      <ImageTwoColumn href={'/2023/kuri/kuri13.png'}>
        <p>サイバーメタルチンピラのメンバーも多数参加しているという闇のコミュニティ「龍道会」のイメージイラストです。「龍」の持つイメージからか、和のイメージが強くでました。左から青/黒/白/赤と衣装のカラーバランスが美しく、四天王のような感じで構図が揃っていて素敵ですね。</p>
      </ImageTwoColumn>
      <h3>渋谷 センター街 ハチ公</h3>
      <ImageTwoColumn href={'/2023/kuri/kuri14.png'}>
        <p>筆者の現在の勤務地、「渋谷」をテーマにした１枚です。秋葉原や銀座とは違って現代の若者の街ということで、茶髪の学生のキャラクターが生成されました。渋谷特有の情景っぽさは無いですが、ハチ公（？）を抱えているのできっと渋谷でしょう。</p>
      </ImageTwoColumn>
      <h3>ニコニコ超会議 サブカルチャー イベント</h3>
      <ImageTwoColumn href={'/2023/kuri/kuri15.png'}>
        <p>ネット系サブカルチャーの大イベント「ニコニコ超会議」のイメージイラストです。賑やかなイベントのムードにサブカル人間的なパーツも揃っており、ニコニコ超会議らしさはどことなく感じるワクワクする１枚に仕上がっています。左の余白にエモいテキストを入れたくなりますね。</p>
      </ImageTwoColumn>
    </Pagination>
  )
}
