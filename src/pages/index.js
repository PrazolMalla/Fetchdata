import { useEffect, useState } from "react";
import Link from 'next/link';
import Render from './render-index';

export default function Home() {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const fetchData = async()=>{
      try{
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data)
      }catch(error){
        console.log("error");
      }
    }
    fetchData();
  },[]);

const postList = posts.filter((post)=>(post.id<10));
  

  return(
    <Render postList={postList}/>
    
  )
}
