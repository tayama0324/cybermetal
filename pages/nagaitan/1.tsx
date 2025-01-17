import {Title} from '../../components/Title'
import {Image} from '../../components/Image'

export default function Page() {
  return (
    <div>
      <Title
        title={'繁殖する技術'}
        description={'子どもをつくってみた話'}
        author={'ながいたん'}
        image={'/nagaitan/author.jpeg'}
      />
      <h2>0. 前書き</h2>
      <p>
        本稿は2022年夏開催のコミックマーケット100にて頒布された、NP-complete による「Monitoring AKA-CHAN」（著者：まさらっき）[*1] にインスパイアを受けて執筆されました。まさらっき第一子誕生おめでとう。
      </p>
      <h2>1.不妊治療について</h2>
      <h3>1.1. 子どもはできるものではなくつくるもの</h3>
      <p>やればできる。そう思っていたころが私にもありました。健康な男女が避妊せずまぐわっていれば、子どもはすぐできてしまう。なのでしっかり避妊をして、できないようにしようと。</p>
      <p>たしかに、20代であればその通りでしょう。健康な男女が1年間避妊をしないで性交渉をしたときの妊娠確率は20代前半で86％、20代後半でも78％になるそうです。それが30代前半では63％、30代後半では52％、40代前半で36％、40代後半ではわずか5％と、年齢を重ねるにつれ急激に下がっていきます[*2]。</p>
      <p>一方で、日本における男女の平均初婚年齢はどんどん高まっています。厚生労働省の調査によれば、2020年の平均初婚年齢は男性が31.0歳、女性は29.4歳[*3]。つまり、30代以降に子どもを持つことを考える人が増えているといってよいでしょう。</p>
      <p>時間が経つほどに妊娠する確率は下がっていきます。子どもが欲しいのであれば、できるのを待つのではなく、意識的につくっていきましょう。特に現代人は忙しいのです。使える技術は最大限活用し、時間と労力を削減していきましょう。</p>
      <h3>1.2. 1年子どもができなかったら不妊治療をはじめよう</h3>
      <p>日本産科婦人科学会では、健康な男女が1年間避妊をしないで性交渉をしても子どもができない場合「不妊」であると定義づけているそうです。年齢にもよりますが、30代前半であれば1年程度、30代後半以降であれば半年程度がんばって子どもができないようであれば、不妊治療に取り組んでみることをお勧めします。</p>
      <p>幸い、2022年4月から、不妊治療の保険適用が始まりました。それまでも自治体ごとに助成金などはありましたが、保険適用の場合は煩雑な手続きが特に必要なく、自治体による差もないのが良いところですね。</p>
    </div>
  )
}
