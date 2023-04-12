import React from 'react'
import Printer from "../../img/coffe/printer.png";
import Moustache from "../../img/moustache.png";
import cardFree from '../../img/free_pass.png'


function CardSeason() {
  return (
    <div className="cardcoffe" style={{ marginTop: "150px" }}>
    
      <div className="cont__coffe" style={{background:"#2D2D37"}}>
        <img src={cardFree} alt="" className="container__coffe-img" />
        

        <div className="container__coffe_amount">
          <p>100 $PBO</p>
        </div>

        <div className="container__coffe_input">
          <p>QTY</p>
          <input type="number" />
        </div>
        <div className="center">
          <button className="container__coffe-button">Purchase</button>
        </div>
      </div>

      
    </div>
  )
}

export default CardSeason