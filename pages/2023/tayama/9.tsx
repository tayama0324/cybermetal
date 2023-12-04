import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={999}>
      <h2>追記</h2>
      <p>本記事を書いている途中に気づいたのですが、Meta Quest 3 [^5]など最近のVR機器にはビデオパススルー機能があり、周囲の映像をカメラで取り込んでゴーグル内に映せるそうです。これを複視持ちの筆者が使ったらどう見えるのか......？　有識者に聞くと、この機能はパンフォーカスで遠近両方に焦点の合った映像を、右目用と左目用2つのディスプレイに映すものだそうです。装着者はディスプレイに対して焦点を合わせればよいので、筆者の複視を矯正できる可能性はありそうに思います。</p>
      <p>残念ながらこの記事の執筆には間に合いませんでしたが、もしかしたら筆者はサイバーメタルチンピラめいて常時VRゴーグルを着用することになるかもしれません。よろしくお願いします。</p>
      <hr />
      <ol>
        <li>https://myel.myvoice.jp/products/detail.php?product_id=28109</li>
        <li>https://www.mhlw.go.jp/topics/2004/06/tp0625-2g.html</li>
        <li>https://www.msdmanuals.com/ja-jp/%E3%83%9B%E3%83%BC%E3%83%A0/20-%E7%9C%BC%E3%81%AE%E7%97%85%E6%B0%97/%E7%9C%BC%E7%96%BE%E6%82%A3%E3%81%AE%E7%97%87%E7%8A%B6/%E8%A4%87%E8%A6%96 </li>
        <li>https://hashiguchi-cl.com/page/brainpedia/%E3%82%82%E3%81%AE%E3%81%8C%E4%BA%8C%E9%87%8D%E3%81%AB%E8%A6%8B%E3%81%88%E3%82%8B%EF%BC%88%E8%A4%87%E8%A6%96%EF%BC%89/</li>
        <li>https://www.meta.com/jp/quest/quest-3/ </li>
      </ol>
    </Pagination>
  )
}
