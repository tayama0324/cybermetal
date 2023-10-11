# CyberMetalChimpira

Welcome to underground...

## How to preview

```zsh
yarn install
yarn dev
```

起動したら `http://localhost:3000/{year}` で表示できます

## How to edit

- 他のページを参考に `/pages/{year}/{authorName}/{pageCount}.tsx` を作成してください
- 基本的には後述するタグと共通コンポーネントだけ使ってください
- 必要であれば自由にカスタマイズしても構いません
- B5サイズでの作成を想定しています
  - 上下左右20mmの余白があります
  - 余白を超えそうな場合は新規ページを作成してください

## Tags

一部のタグにはスタイルを適用していますのでご活用ください

- `<h2>` 見出しはこれ
- `<p>` 文章はこれ
  - (`<br />`での改行は非推奨)
- `<strong>` 太字にしたい場合はこれ
- `<small>` 注釈にしたい場合はこれ

## Components

共通化したコンポーネントです

### Title

- ページのタイトルに使ってください
- twitter と webiste は省略可能です

```
import {Title} from '../../components/Title'
<Title
    title={'秋葉原に10年ぐらい住んでみた'}
    description={'みんな大好き秋葉原'}
    author={'なのくろ'}
    twitter={'@nanocloudx'}
    website={'https://wwww.dev'}
/>
```

### Image

- 画像を埋め込みたいときに使ってください
- 画像ファイルは `/public/{year}/{authorName}/` に置いてください
- CSSでグレースケール化されます
- description は省略可能です

```
import {Image} from '../../components/Image'
<Image
    href={'/nanocloudx/image.webp'}
    description={'懐かしき景色'}
/>
```
