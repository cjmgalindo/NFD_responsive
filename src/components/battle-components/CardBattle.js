import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"

import Lieutenant from "../../img/battle/lieutenant-2.png";


function CardBattle({img,text, width}) {


  useEffect(()=>{
    Aos.init({duration:1500});

  },[])


  return (
    <div className="backgroud__card" data-aos="fade-down">
      <img src={img} alt="" />

      <div className="progress-bar__battle">
        <div style={{width: `${width}%`}}></div>
        <p>{text}/100</p>
      </div>
    </div>
  );
}

export default CardBattle;
