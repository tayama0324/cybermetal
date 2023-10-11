import {Atogaki} from '../../components/Atogaki'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={74}>
      <div>
        <h2>編集後記</h2>
        <p>
          本誌は<strong>「ノンジャンルなんでもあり合同誌」</strong>です。
        </p>
        <p>
          最近得た知見や趣味、非日常的な体験、雑学、小ネタなど、アウトプットする場を失っていたコンテンツを一冊に集めれば同人誌として成り立つのではないか？と試験的に発行してみました。
          ほとんどの人が知らなかったり、どうでもよかったりする内容でも、そのジャンルを深く追求していくと意外と面白い発見があります。
        </p>
        <p>
          どんなジャンルであれ「大好き」を追求していくことは大変面白く、またその誰かの「大好き」を覗き見ることも、同じくらい知的好奇心が刺激され面白いのです。
        </p>
        <small>
          *ちなみに「サイバーメタルチンピラ」というタイトルには特に意味がなく、とりあえず胡散臭ければ何でも良いという理由で雑に決まりました。<br />
          **AIを上手く活用してみようということで、表紙絵と短編をAIに描かせてみました。すごいですね。
        </small>
        <p>
          もしかしたら来年も発行するかもしれませんので、そのときは是非またお立ち寄りいただければ幸いです。この度は本誌を手にとっていただき誠にありがとうございます。
        </p>
        <p style={{textAlign: 'right'}}>編集担当 なのくろ</p>
      </div>
      <div style={{marginTop: '1rem'}}>
        <h2>著者からひとこと</h2>
        <div>
          <Atogaki author={'tayama0324'} image={'/2022/tayama/author.jpg'} message={'ハイクを詠め'} />
          <Atogaki author={'kinoppyd'} image={'/2022/kinoppyd/author.jpeg'} message={'禁酒中なんで酒が飲みたいです'} />
          <Atogaki author={'@kusano_k'} image={'/2022/kusano/author.png'} message={'今年のふるさと納税の枠が残っている人は、金子眼鏡店の割引券をもらいましょう。'} />
          <Atogaki author={'冬椿'} image={'/2022/fuyutsubaki/author.png'} message={'今年読むべききらら作品「死神ドットコム」が月曜完結したらしいです'} />
          <Atogaki author={'daichiro.eth'} image={'/2022/daichiro/author.png'} message={'お金が一向に貯まりません'} />
          <Atogaki author={'物入れ狂戦士'} image={'/2022/pokeba/author.png'} message={'平穏無事に暮らしたいですね'} />
          <Atogaki author={'おめが'} image={'/2022/omega/author.png'} message={'無限の倉庫があれば買ってた'} />
          <Atogaki author={'かえで@office_acer'} image={'/2022/sekiyasu/author.jpeg'} message={'実家に引っ越して1年、縮小した部分はあるものの相変わらず活動の中心は東京です。'} />
          <Atogaki author={'ちんぴらD'} image={'/2022/dera/author.png'} message={'おれがいなけりゃこの本は今頃「サイバーメタルエリート」になってたぞ？おれに感謝しな'} />
          <Atogaki author={'なのくろ'} image={'/2022/nanocloudx/author.jpeg'} message={'来年は良い年になりますように...(切実)'} />
          <Atogaki author={'ながいたん'} image={'/2022/nagaitan/author.jpeg'} message={'コミケ初参戦です。よい記念になりました。'} />
        </div>
      </div>
    </Pagination>
  )
}
