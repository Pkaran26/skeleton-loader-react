import React from 'react'

const Post = ({ title, body, image, date })=>{

  return (
    <div className="post card bg-light">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-1">
            <img src={ image } alt={ title } />
          </div>
          <div className="col-lg-11">
            <h4 className="card-title">{ title }</h4>
            <p className="card-text">{ body }</p>
            <p className="card-text">{ date }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
