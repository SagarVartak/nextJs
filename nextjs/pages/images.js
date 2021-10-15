import React from 'react'

export default function images({data}) {
    console.log(data);
    return (
        <div>
            Getting Data
        </div>
    )
}

export async function getStaticProps(){
    const data = await fetch('https://api-ap-northeast-1.graphcms.com/v2/ckup3h1ly1g0d01z6f8hm7b1w/master', {
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
      .then(res => {
        res.json()
        console.log(res.json());
        return res.json()
      })
      .catch(err => {
        console.log(err);
      });

      const img = await JSON.stringify(data);
      return{
          props:{
              img
          }
      }
  }