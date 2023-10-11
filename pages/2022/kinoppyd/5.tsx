import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={16}>
      <p>
        香り付けの方法は、ニュートラルスピリッツとボタニカルを一緒に単式蒸留器にいれ蒸留したり、蒸留器の蒸気が通る部分にボタニカルを入れたカゴを取り付けて高温のエタノールを通過させたり、様々です。このように、一度作った蒸留酒に、さらにボタニカルを加えた上で蒸留するという作り方をされます。
      </p>
      <h3>テキーラ</h3>
      <p>
        テキーラは、リュウゼツラン（竜舌蘭）という単子葉植物の一種であるアガヴェという植物の球根を原料とします。製造の工程や蒸留の方法、熟成の方法がウイスキーによく似ており、法律で製法が厳しく決められている点もよく似ています。蒸留方法は単式蒸留が主で、いずれの蒸留方法を使ったとしても、二回以上の蒸留を行うことが法律で決められています。
      </p>
      <h2>まとめ</h2>
      <p>
        八世紀に生まれた醸造酒の蒸留という技術は、思った以上に当時の姿のまま現在でも我々においしいお酒をもたらしてくれることがわかりました。その後十九世紀に起こった大きな変化で、さらに多種多様なお酒を造り出すことを可能としました。今回は蒸留にフォーカスして解説しましたが、実際にお酒を造るためには多くの工程があり、蒸留はあくまでその一つに過ぎません。ですが、お酒を造る全ての工程は他の工程と密接に関わっており、例えば蒸留をすることによって樽での熟成という工程が可能になったウイスキーは、他のお酒とは一線を画する進化を遂げることになったり、蒸留によってボタニカルの味付けが可能になったジンは他に類を見ない風味のお酒になりました。
      </p>
      <p>
        蒸留は、中学生でも理解できる非常に簡単な化学現象であるにもかかわらず、お酒という人類の文化において大きな意味を持っている面白い工程です。そんなお酒の蒸留の面白さを伝えることができれば、サイバーメタルチンピラ冥利に尽きます。
      </p>
      <ul>
        <li>*1 https://01.connect.nissha.com/blog-gassensor-ethanol/</li>
        <li>*2 古賀邦正. ウイスキーの科学. ブルーバックス, 第一版, 講談社. 9784062576581</li>
        <li>*3 Harrison. The Impact of Copper in Different Parts of Malt Whisky Pot Stills on New Make Spirit Composition and Aroma. 2012. https://onlinelibrary.wiley.com/doi/pdf/10.1002/j.2050-0416.2011.tb00450.x</li>
        <li>*4 https://www.nikka.com/distilleries/miyagikyo/equipment/spot3.html</li>
        <li>*5 https://www.nta.go.jp/about/organization/tokyo/sake/abc/abc-shochu.htm</li>
        <li>*6 https://okinawa-awamori.or.jp/stories/4939/</li>
      </ul>
    </Pagination>
  )
}
