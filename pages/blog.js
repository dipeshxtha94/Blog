import React, { useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'
import InfiniteScroll from "react-infinite-scroll-component";


export default function Blog(props) {
  console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(4)
  const fetchData = async () => {
    let d= await fetch(`http://localhost:3000/api/blogs/?count=${count+4}`)
    setCount(count+4)
    let data= await d.json();
    setBlogs(data)
  };
  return (
    <div className={styles.container}>
     <h1 className={styles.center}>All Blogs</h1>
     <InfiniteScroll
  dataLength={blogs.length} //This is important field to render the next data
  next={fetchData}
  hasMore={props.allCount!==blogs.length}
  loader={<h3>Loading...</h3>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
        {blogs.map(blogitem=>(
              <div key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3 className={styles.title}>{blogitem.title}</h3></Link>
                <p className={styles.content}>{blogitem.metadesc.substring(0, 80)}...</p>
                <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More..</button></Link>
            </div>
       ) )}
      </InfiniteScroll>
    </div>)
};

export async function getStaticProps(context){
  let data= await fs.promises.readdir("blogdata")
  let myfile;
  let allCount= data.length;
  let allBlogs = [];
  for (let index = 0; index < 4; index++) {
    const item = data[index];
    console.log(item)
    myfile = await fs.promises.readFile(('blogdata/'+item),'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }
  return {props: {allBlogs, allCount}}

}
