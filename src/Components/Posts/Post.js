import React from 'react'
import './Post.css'
const Post = ({posts}) => {
    const post_count = posts.length;
  return (
    <div className='posts'>
        <div className="posts_start">
        <div className='post_count'>
            {post_count} Posts
        </div>
        <div className="border">

        </div>
        </div>

       <div className="posts">
         {
            posts.map((post,idx)=>{
                return (
                    <div key={idx} className='post'>
                    <div className="title_icon"  >
                    <h2>{post.title}</h2>
                    <img src={post.icon} alt="" style={{background:`${post.bg}`}} className='like'/>
                    </div>

                    <p>{post.detail}</p>
                    <div className="post-details">
                    <span style={{fontWeight:"600"}}><span style={{color:"#4492cd"}}>{post.type}</span> by {post.author}</span>
                    <span style={{float :"right"}}>{post.date} · {post.status} · {post.views}</span>
                    </div>
                    </div>
                )
            })
         }
       </div>

    </div>
  )
}

export default Post