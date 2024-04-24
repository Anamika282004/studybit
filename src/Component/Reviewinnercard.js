import React from 'react'

function Reviewinnercard({name,imageUrl,feedback}) {
  return (
    <>
       <div className="col">
            <div className="card" style={{ width: "15rem", margin: "10px" }}>
                <div className="d-flex justify-content-center align-items-center bg-blue-300 rounded h-40">
                    <img src={imageUrl} className="card-img-top rounded-circle" alt="..." style={{ width: "100px", height: "100px", margin: "10px" }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{feedback}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
      </div>
    </>
  )
}

export default Reviewinnercard
