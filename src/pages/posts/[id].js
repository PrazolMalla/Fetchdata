import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PostInfo(){
    const [post,setPost] = useState("")
    const router = useRouter();
    const {id} = router.query;
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        const fetchData = async()=>{
            try{
                const response = await fetch(url);
                const data = await response.json();
                setPost(data)
            }catch(error){
                console.log("error");
            }
        }
        fetchData();
    },[id]);
    return(
        <div className="mt-10 w-[60rem] h-96  bg-slate-400 text-white px-2 py-2 flex flex-col justify-evenly">
            <h1 className=" font-bold text-4xl text-center">POST INFO</h1>
            <p>UserId:{post.userId}</p>
            <p>PostId:{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}