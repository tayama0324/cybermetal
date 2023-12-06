import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={999}>
      <h2>まとめ</h2>
      <p>要約すると以下である</p>
      <ul>
        <li>自分が欲しいものについて理解する</li>
        <li>適切な人に依頼する</li>
        <li>欲しいものが「イラストの形」になるよう、依頼内容をまとめる</li>
        <li>事故が起きないように、依頼文を書く</li>
        <li>任せ、祈る</li>
      </ul>
      <p>列挙すると「そうだね」としか言いようがないが、これに気をつけれるとそれになりによい絵が納品される気がする。愉快なskebライフを楽しんでほしい。</p>
    </Pagination>
  )
}
