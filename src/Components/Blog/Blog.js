import React, { useState, useEffect } from 'react'
import Post from './Post'
import Loader from './Loader'
import { posts } from './posts'

const Blog = ()=>{
  const [data, setData] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      setData(posts)
    },3000)
  }, [])

  return (
    <div>
      { data && data.length>0?
        data.map((e, i)=>(
          <Post
            key={ i }
            { ...e }
          />
        ))
      :
        <Loader />
      }
    </div>
  )
}

export default Blog
