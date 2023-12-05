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
        description={'４こま'}
        author={'だいちろ'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'チーズ作るよ'}
        description={'作る'}
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
        title={'何か'}
        description={'何か'}
        author={'きすちぃ'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'ChatGPT DALL-E3で遊ぶ'}
        description={'巷で有名な企業やサービスなどをAI画像化したクイズを作ります'}
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
        title={'ルービックキューブの話を何か書きたい'}
        description={'ルービックキューブの話を何か書きたい'}
        author={'kusano_k'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'筆者の異常な視界　またはいかにして私は心配するのをやめてプリズムを愛するようになったか'}
        description={'複視の診療記録です'}
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
        title={'子どもがかわいいだけの何か'}
        description={'子どもがかわいいというだけの何かを書きます'}
        author={'ながいたん'}
        // 1page
      />
      <Mokuji
        page={999}
        title={'街角に佇む謎のアニメ看板マッサージ屋の真実に迫る'}
        description={'～都心に潜む異世界への入り口～'}
        author={'匿名チンピラ（埼玉県在住）'}
        break
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
