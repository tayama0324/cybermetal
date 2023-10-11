import {Mokuji} from '../../components/Mokuji'
import {Pagination} from '../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={1}>
      <h1 style={{marginBottom: '1.2rem', fontSize: '1.5rem'}}>目次</h1>
      <Mokuji
        page={2}
        description={'プロローグ'}
        // 2page
      />
      <Mokuji
        page={999}
        title={'タイトルタイトルタイトル'}
        description={'説明文だよ説明文だよ説明文だよ'}
        author={'著者の名前'}
        // 1page
      />
      <Mokuji
        page={999}
        description={'編集後記＆おまけ'}
        // 2page
      />
    </Pagination>
  )
}
