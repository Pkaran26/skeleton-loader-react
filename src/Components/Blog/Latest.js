import React from 'react'

const Latest = ({ recent })=>(
  <div className="card bg-light">
    <div className="card-body">
      <h4 className="card-title">Latest Posts</h4>
        <ul>
          { recent.map((e, i)=>(
            <li key={ i }>{ e.title }</li>
          )) }
        </ul>
    </div>
  </div>
)

export default Latest
