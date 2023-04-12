import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"

import EquipInfo from "./EquipInfo";
import Lieutenant from "../../img/battle/lieutenant-neutral.png";

import Item1 from '../../img/battle/item-1.png'
import Item2 from '../../img/battle/item-2.png'
import Item3 from '../../img/battle/item-3.png'

import imgLife from "../../img/battle/life.png";
import imgRespect from "../../img/battle/respect.png";
import imgResistance from "../../img/battle/resist.png";
import imgAttack from "../../img/battle/attack.png";
import imgCritical from "../../img/battle/critcial.png";
import CardBattle from "./CardBattle";
import Vs from "./Vs";


function Equip({state, setState}) {
  
useEffect(()=>{
  Aos.init({duration:1500});

},[])


  let bg ={
    backgroundColor: "rgba(64,63,63,0.75)" ,
    padding:"1em"
  }

  return (
    <>
      <div className="row" data-aos="fade-down">
        <div className="col-12 col-md-5 col-lg-3" >
          <img src={Lieutenant} alt="" />
        </div>
        <div className="col-12 col-md-7 col-lg-4 mt-5" >
          <h2 className="text-white ">Level 20</h2>
          <div className="progress-bar__equip">
            <span className="progress-bar__equip-percentage">
              6550/17000 (39%)
            </span>
          </div>
          <div className="row px-5 mt-4">
            <div className="col-12 col-md-6 my-2">
              {" "}
              <EquipInfo img={imgRespect} tittle={"Respect"} number={407} />
            </div>
            <div className="col-12 col-md-6 my-2">
              {" "}
              <EquipInfo img={imgLife} tittle={"Life"} number={370} />
            </div>
            <div className="col-12 col-md-6 my-2">
              {" "}
              <EquipInfo img={imgResistance} tittle={"Resistance"} number={"25%"} />
            </div>
            <div className="col-12 col-md-6 my-2">
              {" "}
              <EquipInfo img={imgAttack} tittle={"Attack"} number={370} />
            </div>
            <div className="col-12 col-md-6 my-2">
              {" "}
              <EquipInfo img={imgCritical} tittle={"Critical"} number={370} />
            </div>
          </div>
      
      
      
          <div className="row  mt-4 px-3 d-flex justify-content-center align-items-center">
            <div className="col-6 col-md-4" >
              {" "}
             <img src={Item1} alt="" style={bg}/>
            </div>
            <div className="col-6 col-md-4" >
              {" "}
              <img src={Item2} alt="" style={bg}/>
            </div>
            <div className="col-6 col-md-4 " >
              {" "}
              <img src={Item3} alt="" style={bg}/>
            </div>
            <div className="col-6 col-md-4 mt-4" >
              {" "}
             <img src={Item1} alt="" style={bg}/>
            </div>
            <div className="col-6 col-md-4 mt-4" >
              {" "}
              <img src={Item2} alt="" style={bg}/>
            </div>
            <div className="col-6 col-md-4 mt-4" >
              {" "}
              <img src={Item3} alt="" style={bg}/>
            </div>
            
          </div>
        </div>
      
        
      </div>
      
    </>
  );
}

export default Equip;
