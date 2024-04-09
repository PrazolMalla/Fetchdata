
import Link from 'next/link';

function Render(props){
    const postDisplay = props.postList.map((post)=>(
        <div className="w-72 h-52 mt-10 bg-slate-400 text-white px-2 py-2 flex flex-col justify-evenly" key={post.id}>
          <p>{post.title}</p>
          <Link href={`/posts/${post.id}`} key={post.id}><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">read more</button></Link>
        </div>
      )
    )
    return(
        <ul className="flex flex-wrap justify-evenly gap-1">
            {postDisplay}
        </ul>
    );
    
}

export default Render;