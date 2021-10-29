import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import styles from "../styles/Images.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

export default function images(images) {
  // console.log(images);
  return (
    <>
    <Header />
      <div>
        <div className={styles.imageRow}>
          <div className={styles.imageColumn}>
            {images.images.rooms[0].images.map((image) => (
              <div className={styles.imageDiv} key={image.id}>
                <Link href={"/image/"+image.handle}>
                <img
                  src={image.url}
                  alt={image.fileName}
                  loading="lazy"
                  key={image.id}
                  // onClick={(e) => {openModal(image.handle);e.preventDefault();}}
                ></img>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
      {/* <button className={styles.topButton} onClick={topFunction()}>
              <FontAwesomeIcon icon={faAngleUp} />
      </button> */}
    </>
  );
}

export async function getStaticProps() {
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
      // console.log(res.data)
      return res.data;
    });

  return {
    props: { images },
  };
}
