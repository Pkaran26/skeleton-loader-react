import React, { useState, useEffect } from 'react'
import Post from './Post'
import Loader from './Loader'
import { posts, latest } from './posts'
import Latest from './Latest'
import Loader2 from './Loader2'

const Blog = ()=>{
  const [data, setData] = useState([])
  const [recent, setRecent] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      setRecent(latest)
    },2500)

    setTimeout(()=>{
      setData(posts)
    },3000)
  }, [])

  return (
    <div className="row" style={{ marginTop: '25px' }}>
      <div className="col-lg-8">
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
      <div className="col-lg-4">
        { recent.length>0?
        <Latest recent={ recent } />
        :
          <Loader2 />
        }
      </div>
    </div>
  )
}

export default Blog
