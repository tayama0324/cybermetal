import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1 style={{fontSize: '2rem'}}>サイバーメタルチンピラ2023</h1>
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
          テスト記事
          <Link href={'/2023/example/1'}>１</Link>
          <Link href={'/2023/example/2'}>２</Link>
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
