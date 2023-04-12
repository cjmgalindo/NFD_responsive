import React from 'react'
import Phi from "../../img/phi201.png";

function Card({img = Phi, text = "PHS ( 28657 )", color="rgb(254, 175, 0)"}) {
  return (
    <div className="card__blend" >
      <img src={img} alt="" />
      <p className="fw-bold pt-2">{text}</p>
      <span style={{background: color}}></span>
    </div>
  )
}

export default Card