import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1 style={{fontSize: '2rem'}}>サイバーメタルチンピラ</h1>
      <p>※これは作業用の目次です。印刷対象ではありません。</p>
      <ul style={{fontSize: '1.2rem'}}>
        <li>
          <Link href={'/2022'}>2022</Link>
        </li>
        <li>
          <Link href={'/2023'}>2023</Link>
        </li>
      </ul>
    </div>
  )
}
