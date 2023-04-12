import React, { useState,useEffect } from "react";
import Printer from "../../img/coffe/printer.png";
import Moustache from "../../img/moustache.png";

import Aos from "aos";
import "aos/dist/aos.css"


function CardCoffe() {

  useEffect(()=>{
    Aos.init({duration:1500});

  },[])

  return (
    <div className="cardcoffe" style={{ marginTop: "100px" }} >
    
      <div className="cont__coffe">
        <img src={Printer} alt="" className="container__coffe-img" />
        <p className="container__coffe-descripcion">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          tempora iste sapiente ex, autem placeat! Dolor magni ipsa
        </p>

        <div className="container__coffe_amount">
          <p>130 $PBO</p>
          <img src={Moustache} alt="" />
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
  );
}

export default CardCoffe;
