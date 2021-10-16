import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import styles from "../styles/Images.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function images(images) {

  mybutton = document.getElementsByClassName("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  // console.log(images);
  return (
    <>
    <Header />
      <div>
        <div className={styles.imageRow}>
          <div className={styles.imageColumn}>
            {images.images.rooms[0].images.map((image) => (
              <div className={styles.imageDiv}>
                <img
                  src={image.url}
                  alt={image.fileName}
                  loading="lazy"
                  key={image.id}
                  // onClick={(e) => {openModal(image.handle);e.preventDefault();}}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
      <button className={styles.topButton} onClick={topFunction()}>
              <FontAwesomeIcon icon={faAngleUp} />
      </button>
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
      // console.log(res.data)
      return res.data;
    });

  return {
    props: { images },
  };
}
