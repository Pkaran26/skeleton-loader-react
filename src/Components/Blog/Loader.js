import React from 'react'

const Loader = ({ title, body, image, date })=>{

  return (
    <div className="loader card bg-light">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-1">
            <div className="img animate"></div>
          </div>
          <div className="col-lg-11">
            <h4 className="card-title title animate">&nbsp;</h4>
            <p className="card-text text animate">&nbsp;</p>
            <p className="card-text text animate">&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
