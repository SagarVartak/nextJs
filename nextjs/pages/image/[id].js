import React from 'react'
import styles from '../../styles/Image.module.css'
import { saveAs } from "file-saver";
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Contact from '../../components/Contact';

export default function image(props) {
    const url = props.data[0].rooms[0].images[0].url;
    console.log("these are props",props.data[0].rooms[0].images[0].fileName);
    console.log("currenturl",url);
    const fileName = props.data[0].rooms[0].images[0].fileName;

    const saveFile = () => {
        saveAs(
          url,
          fileName
        );
      };

      const router = useRouter();
    return (
      <>
      <Header />
        <div className={styles.container}>
            <div className={styles.imgContain}>
            <img src={url}></img>
            </div>
            <div className={styles.buttonSection}>
                    {/* <a href={url} download> */}
                    <h3>{fileName}</h3>
                    <button className={styles.btn} onClick={saveFile}>
                    Download
                    </button>
                    {/* </a> */}
                <button className={styles.btn} onClick={() => router.back()}>Back</button>
            </div>
            
        </div>
        <Contact />
        </>
    )
}

export const getStaticProps = async (context) => {
    console.log("adadfa",context.params.data);

    const imag = await fetch(
      "https://api-ap-northeast-1.graphcms.com/v2/ckup3h1ly1g0d01z6f8hm7b1w/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `{
            rooms {
              id
              images(where : {handle : "${context.params.id}"}){
                id
                fileName
                url
                handle
              }
            }
          }
          `,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        return res.data;
      });
      
    return {
        props: {
          image: [context.params.id],
          data: [imag],
        },
      };
}


export const getStaticPaths = async () => {
    const images = await fetch(
        "https://api-ap-northeast-1.graphcms.com/v2/ckup3h1ly1g0d01z6f8hm7b1w/master",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
        {
          rooms {
            id
            images(orderBy:fileName_ASC first:1000){
              id
              fileName
              url
              handle
            }
          }
        }`,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data)
          return res.data;
        });
    console.log("jabdjadjv ajdj dj v", images.rooms[0]);
    let paths = images.rooms[0].images.map((img)=>{
        // console.log("fileName",img.fileName);
        return{
            params:{
                id:`${img.handle}`,
            }
        }
    });
    
    
    return {
      paths,
      fallback: false,
    };
  };