import {Mokuji} from '../../components/Mokuji'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={1}>
      <h1 style={{marginBottom: '1.2rem', fontSize: '1.5rem'}}>目次</h1>
      <Mokuji
        page={2}
        description={'プロローグ'}
        // 2page
      />
      <Mokuji
        page={999}
        title={'サイバーメタルチンピラ２です。'}
        description={'わたしがサイバーメタルチンピラでした。（衝撃の事実）'}
        author={'だいちろ'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'チーズ作るよ'}
        description={'チーズを作りますがマジでコスパは悪いです'}
        author={'kinoppyd'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'10万円で始める同人誌即売会の開き方'}
        description={'誰でも10万円あれば、同人誌即売会を開ける事をお伝えしたい！！'}
        author={'ryudo'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'島風くんコスプレを楽しむために知っておくべき事'}
        description={'日本のコスプレイベントの「ルール」とかを調べたやつを吐き出します'}
        author={'きすちぃ'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'身の回りのものをAIで美少女化したら楽しかった件'}
        description={'AIで遊んでると時間解ける、マジで。'}
        author={'kuri'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'skebで名画を出す'}
        description={'masterpieceって書く <- 間違い'}
        author={'冬椿'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'分かりやすくもない Android 端末購入ガイド'}
        description={'に見せかけたガジェットレビューブログに対してのお気持ち'}
        author={'happo31'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'ルービックキューブの話'}
        description={'今年1年間ハマっていた。'}
        author={'kusano_k'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'街角に佇む謎のアニメ看板マッサージ店の真実に迫る'}
        description={'アニメイラスト看板のマッサージ店は異世界ダンジョンへの入口だった！？'}
        author={'匿名チンピラ（埼玉県在住）'}
        break
        // 1page
      />
      <Mokuji
        page={999}
        title={'筆者の異常な視界'}
        description={'またはいかにして私は心配するのをやめてプリズムを愛するようになったか'}
        author={'tayama0324'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'婚活RTA'}
        description={'１ヶ月で結婚してみた'}
        author={'なのくろ'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'猫と赤子'}
        description={'2月に子どもが生まれた話です'}
        author={'ながいたん'}
        // 1page
      />
      <Mokuji
        page={999}
        description={'編集後記＆おまけ'}
        // 2page
      />
    </Pagination>
  )
}
