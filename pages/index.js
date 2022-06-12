import Head from 'next/head'
import { useRouter } from 'next/router'
import {Button} from 'antd'
import styles from '../styles/Home.module.css'

export default function Home() {

  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>你好</title>
      </Head>
      <Button style={{fontSize: 26}} type='link' onClick={() => router.push('/doc')} >去解析 Doc文档页面</Button>
    </div>
  )
}
