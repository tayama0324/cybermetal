import {Image} from '../../components/Image'

export default function Page() {
  return (
    <div>
      <h3>駅や店が遠い</h3>
      <p>
        当たり前だが、一軒家は住宅街に建ってることが多い。で、その住宅街は駅や店から離れていることが往々にして多い。
      </p>
      <p>
        もし駅や店が徒歩圏内にあるならその一軒家は大当たりだよ、良かったな。
      </p>
      <p>
        でもな、そうじゃねぇ一軒家の方が残念だが多いんだ。だからこそ、田舎に住んでいる奴らは移動手段としてこぞって自動車を所持している。そういや、この合同誌に寄贈してる奴らの中で最近田舎に引っ越して自動車を買ったって奴もいるみてぇだな。そりゃあ最高に賢明な判断だよ。
      </p>
      <p>
        それくらい田舎は駅とか店までの距離がクソ遠くて普通は自動車がねぇと生活が成り立たねぇんだ。
      </p>
      <p>
        でも、安心していいぜ。自動車が無くても生活はできる。
      </p>
      <p>
        それなりに速ぇ自転車とそいつに乗り続けるだけの体力、それさえあれば自動車分の働きは十分にできると思うよ。
      </p>
      <p>
        その体力すらねぇクソ雑魚どもはジムで体作ってから出直すか、心もとねぇ身銭を切って自動車を買うことだな。
      </p>
      <Image href={'/dera/chari.jpg'} description={'おれのロードバイク'} widthPercentage={90} />
    </div>
  )
}
