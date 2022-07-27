import React, { useState } from 'react';
import styles from '../../styles/BlogPost.module.css';
import * as fs from 'fs';


const Slug= (props)=>{
  function createMarkup(content) {
    return {__html: content};
  }
  const [blog, setBlog] = useState(props.allBlog);

  return( 
   <div className={styles.container}>
    <main className={styles.main}>
       <h1>{blog && blog.title}</h1>
      <hr />
      {blog &&<div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      
    </main>
  </div>)
  }

  export async function getStaticPaths() {
    return{
      paths:[
        {params: {slug: 'how-to-learn-javascript'}},
        {params: {slug: 'how-to-learn-nextjs'}},
        {params: {slug: 'how-to-learn-programming'}},
        {params: {slug: 'how-to-learn-python'}}
      ],
      fallback: false
    };
  }
  

  export async function getStaticProps(context){
    console.log(context)
    const { slug }= context.params;
    
    const allBlog= await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")

    return{ props: {allBlog: JSON.parse(allBlog)}}
  }

  export default Slug;