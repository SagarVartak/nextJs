import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Contact from '../components/Contact'

export default function Home() {

  return (
    <>
    <div className={styles.container, styles.background}>
      <Head>
        <title>WallPapers OP</title>
        <meta name="description" content="WallPapers OP" />
        <link rel="icon" href="\assets\1200x630bb.png" />
        <script src="https://kit.fontawesome.com/e5539f2c5b.js" crossorigin="anonymous"></script>
      </Head>
      <Header/>

    <div className={styles.texture}>
    
      <div className={styles.btn}>
        <a href="/images">
        <button className={styles.button}>IMAGES</button>
        </a>
      </div>
      </div>
    
    </div>
    <Contact />
    </>
  )
}

 