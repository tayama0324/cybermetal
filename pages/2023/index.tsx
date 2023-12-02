import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1 style={{fontSize: '2rem'}}>サイバーメタルチンピラ2023</h1>
      <p>※これは作業用の目次です。印刷対象ではありません。</p>
      <ul style={{fontSize: '1.2rem'}}>
        <li>
          目次
          <Link href={'/2023/mokuji'}>１</Link>
        </li>
        <li>
          プロローグ
          <Link href={'/2023/prologue/1'}>１</Link>
          <Link href={'/2023/prologue/2'}>２</Link>
        </li>
        <li>
          サイバーメタルチンピラ２です。（だいちろ）
          <Link href={'/2023/daichiro/1'}>１</Link>
        </li>
        <li>
          チーズ作るよ（kinoppyd）
          <Link href={'/2023/kinoppyd/1'}>１</Link>
        </li>
        <li>
          10万円で始める同人誌即売会の開き方（ryudo）
          <Link href={'/2023/ryudo/1'}>１</Link>
        </li>
        <li>
          コスプレ（きすちぃ）
          <Link href={'/2023/quisty/1'}>１</Link>
        </li>
        <li>
          ChatGPT DALL-E3で遊ぶ（kuri）
          <Link href={'/2023/kuri/1'}>１</Link>
        </li>
        <li>
          skebで名画を出す（冬椿）
          <Link href={'/2023/fuyutsubaki/1'}>１</Link>
        </li>
        <li>
          分かりやすくもない Android 端末購入ガイド（happo31）
          <Link href={'/2023/happo31/1'}>１</Link>
          <Link href={'/2023/happo31/2'}>２</Link>
          <Link href={'/2023/happo31/3'}>３</Link>
          <Link href={'/2023/happo31/4'}>４</Link>
          <Link href={'/2023/happo31/5'}>５</Link>
          <Link href={'/2023/happo31/6'}>６</Link>
          <Link href={'/2023/happo31/7'}>７</Link>
        </li>
        <li>
          ルービックキューブの話を何か書きたい（kusano_k）
          <Link href={'/2023/kusano/1'}>１</Link>
        </li>
        <li>
          目がバグった話（tayama0324）
          <Link href={'/2023/tayama/1'}>１</Link>
        </li>
        <li>
          婚活RTA（なのくろ）
          <Link href={'/2023/nanocloudx/1'}>１</Link>
        </li>
        <li>
          猫と赤子（ながいたん）
          <Link href={'/2023/nagaitan/1'}>１</Link>
          <Link href={'/2023/nagaitan/2'}>２</Link>
          <Link href={'/2023/nagaitan/3'}>３</Link>
        </li>
        <li>
          街角に佇む謎のアニメ看板マッサージ屋の真実に迫る（shodai）
          <Link href={'/2023/shodai/1'}>１</Link>
        </li>
        <li>
          編集後記
          <Link href={'/2023/atogaki'}>１</Link>
        </li>
        <li>
          おまけ
          <Link href={'/2023/omake'}>１</Link>
        </li>
        <li>
          奥付
          <Link href={'/2023/okuduke'}>１</Link>
        </li>
      </ul>
    </div>
  )
}
