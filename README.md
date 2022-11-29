# CyberMetalChimpira

Welcome to underground...

## How to preview

```zsh
yarn install
yarn dev
```

起動したら `http://localhost:3000/{authorName}/{pageCount}` で表示できます

## How to edit

- 他のページを参考に `/pages/{authorName}/{pageCount}.tsx` を作成してください
- 基本的には `<p>` と後述する共通コンポーネントだけ使ってください
- 必要であれば自由にカスタマイズしても構いません
- B5サイズでの作成を想定しています
  - 上下左右20mmの余白があります
  - 余白を超えそうな場合は新規ページを作成してください

## Components

共通化したコンポーネントです、よしなに使ってください

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
- 画像ファイルは `/public/{authorName}/` に置いてください

```
import {Image} from '../../components/Image'
<Image
    href={'/nanocloudx/image.webp'}
    description={'懐かしき景色'}
/>
```
