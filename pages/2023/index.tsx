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
          サイバーメタルチンピラ２です。（だいちろ）<br />
          <Link href={'/2023/daichiro/1'}>１</Link>
        </li>
        <li>
          チーズ作るよ（kinoppyd）<br />
          <Link href={'/2023/kinoppyd/1'}>１</Link>
          <Link href={'/2023/kinoppyd/2'}>２</Link>
          <Link href={'/2023/kinoppyd/3'}>３</Link>
          <Link href={'/2023/kinoppyd/4'}>４</Link>
          <Link href={'/2023/kinoppyd/5'}>５</Link>
          <Link href={'/2023/kinoppyd/6'}>６</Link>
        </li>
        <li>
          10万円で始める同人誌即売会の開き方（ryudo）<br />
          <Link href={'/2023/ryudo/1'}>１</Link>
          <Link href={'/2023/ryudo/2'}>２</Link>
          <Link href={'/2023/ryudo/3'}>３</Link>
          <Link href={'/2023/ryudo/4'}>４</Link>
          <Link href={'/2023/ryudo/5'}>５</Link>
          <Link href={'/2023/ryudo/6'}>６</Link>
        </li>
        <li>
          島風くんコスプレを楽しむために知っておくべき事（きすちぃ）<br />
          <Link href={'/2023/quisty/1'}>１</Link>
        </li>
        <li>
          身の回りのものをAIで美少女化したら楽しかった件（kuri）<br />
          <Link href={'/2023/kuri/1'}>１</Link>
          <Link href={'/2023/kuri/2'}>２</Link>
          <Link href={'/2023/kuri/3'}>３</Link>
          <Link href={'/2023/kuri/4'}>４</Link>
          <Link href={'/2023/kuri/5'}>５</Link>
          <Link href={'/2023/kuri/6'}>６</Link>
          <Link href={'/2023/kuri/7'}>７</Link>
        </li>
        <li>
          skebで名画を出す（冬椿）<br />
          <Link href={'/2023/fuyutsubaki/1'}>１</Link>
        </li>
        <li>
          分かりやすくもない Android 端末購入ガイド（happo31）<br />
          <Link href={'/2023/happo31/1'}>１</Link>
          <Link href={'/2023/happo31/2'}>２</Link>
          <Link href={'/2023/happo31/3'}>３</Link>
          <Link href={'/2023/happo31/4'}>４</Link>
          <Link href={'/2023/happo31/5'}>５</Link>
          <Link href={'/2023/happo31/6'}>６</Link>
          <Link href={'/2023/happo31/7'}>７</Link>
        </li>
        <li>
          ルービックキューブの話（kusano_k）<br />
          <Link href={'/2023/kusano/1'}>１</Link>
          <Link href={'/2023/kusano/2'}>２</Link>
          <Link href={'/2023/kusano/3'}>３</Link>
          <Link href={'/2023/kusano/4'}>４</Link>
          <Link href={'/2023/kusano/5'}>５</Link>
        </li>
        <li>
          街角に佇む謎のアニメ看板マッサージ店の真実に迫る（shodai）<br />
          <Link href={'/2023/shodai/1'}>１</Link>
        </li>
        <li>
          筆者の異常な視界（tayama0324）<br />
          <Link href={'/2023/tayama/1'}>１</Link>
          <Link href={'/2023/tayama/2'}>２</Link>
          <Link href={'/2023/tayama/3'}>３</Link>
          <Link href={'/2023/tayama/4'}>４</Link>
          <Link href={'/2023/tayama/5'}>５</Link>
          <Link href={'/2023/tayama/6'}>６</Link>
          <Link href={'/2023/tayama/7'}>７</Link>
          <Link href={'/2023/tayama/8'}>８</Link>
          <Link href={'/2023/tayama/9'}>９</Link>
        </li>
        <li>
          婚活RTA（なのくろ）<br />
          <Link href={'/2023/nanocloudx/1'}>１</Link>
        </li>
        <li>
          猫と赤子（ながいたん）<br />
          <Link href={'/2023/nagaitan/1'}>１</Link>
          <Link href={'/2023/nagaitan/2'}>２</Link>
          <Link href={'/2023/nagaitan/3'}>３</Link>
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
