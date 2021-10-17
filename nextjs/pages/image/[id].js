import React from 'react'
import styles from '../../styles/Image.module.css'
import { saveAs } from "file-saver";

export default function image(props) {
    const url = `https://media.graphcms.com/`+props.image[0];
    console.log("currenturl",url);

    const saveFile = () => {
        saveAs(
          url,
          "sample.jpeg"
        );
      };
    return (
        <div>
            <div className={styles.imgContain}>
            <img src={url} width="100%" height="100%"></img>
            <div className={styles.buttonSection}>
                    {/* <a href={url} download> */}
                    <button className={styles.btn} onClick={saveFile}>
                    Download
                    </button>
                    {/* </a> */}
                <button className={styles.btn}>Back</button>
            </div>
            </div>
        </div>
    )
}

export const getStaticProps = async (context) => {
    console.log("adadfa",context);
    return {
        props: {
          image: [context.params.id],
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
            images{
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
        //   console.log(res.data)
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