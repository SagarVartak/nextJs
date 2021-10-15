import axios from 'axios'
import Head from 'next/head'
import image from 'next/image';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(images) {

   console.log("images",images.images.rooms);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
      <div className={styles.imageRow}>
        <div className={styles.imageColumn}>
      {images.images.rooms[0].images.map((image) => (
            <img
              src={image.url}
              alt={image.fileName}
              loading="lazy"
              key={image.id}
              // onClick={(e) => {openModal(image.handle);e.preventDefault();}}
            ></img>
          ))}
          </div>
          </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const images = await fetch('https://api-ap-northeast-1.graphcms.com/v2/ckup3h1ly1g0d01z6f8hm7b1w/master', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    {
      rooms {
        id
        images{
          id
          fileName
          url
          handle
        }
      }
    }` 
    }),
  })
  .then(res => res.json())
  .then(res => {
    console.log(res.data)
    return res.data;
  });

  return {
    props : { images}
  }
} 