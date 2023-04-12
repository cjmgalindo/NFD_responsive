
import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"

import Associate from "../../img/season/associate.png";
import Untouchable from "../../img/season/untouchable.png";
import Lieutenant from "../../img/season/lieutenant.png";
import Baron from "../../img/season/baron.png";

function Level({btn, setText}) {

  useEffect(()=>{
    Aos.init({duration:1500});

  },[])


  const [eSelect, setSelect] = useState(false)



// limpia, selecciona la card y cambia el estado
const selectCard = (e) =>{
  const nodos = e.target.parentElement.childNodes;
  for (let i = 0; i < nodos.length; i++) {
    nodos[i].className = " "
  }
  e.target.classList.toggle("card__state__select")
  setSelect(true)
}

  return (
    <>

<div className="col-12 col-md-8 " data-aos="fade-down" >
      <div className="season__images" >
        <div onClick={selectCard}>
          <img src={Associate} alt="" />
          <p>free</p>
        </div>
        <div onClick={selectCard}>
          <img src={Untouchable} alt="" />
          <p>common</p>
        </div>
        <div onClick={selectCard}>
          <img src={Lieutenant} alt="" />
          <p>silver</p>
        </div>
        <div onClick={selectCard}>
          <img src={Baron} alt="" />
          <p>gold</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 confirm-mision">
          <h3 className="text-white fw-bold text-uppercase ">
            {" "}
            Confirm mission
          </h3>
          <button onClick={()=> {
            if(eSelect) {
                btn("Missions")
            setText({
                    tittle: "MISSIONS",
                    subtitle: "Select one and start an adventure"
                    })
            }}} >
                Start
            </button>
        </div>
      </div>
    </div>


      <div className="col-12 col-md-4 ">
        <h2
          className="text-white text-uppercase text-center fw-bold"
          style={{ marginTop: "10px" }}
        >
          info mission
        </h2>

        <table className="table__layout mb-4" style={{ margin: "0 auto" }}>
          <tbody>
          <tr>
            <td>Mission</td>
            <td>|</td>
            <td>Associate</td>
          </tr>
          <tr>
            <td>Difficulty</td>
            <td>|</td>
            <td>easy</td>
          </tr>
          <tr>
            <td>entry fee</td>
            <td>|</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Initial debt</td>
            <td>|</td>
            <td>12000 epheebo</td>
          </tr>
          <tr>
            <td>Give Back</td>
            <td>|</td>
            <td>13200 epheebo</td>
          </tr>
          </tbody>
        </table>

        <h3 className="text-uppercase text-white fw-bold text-center p-0 m-0">
          Max amount to win
        </h3>
        <p className="text-white text-center  " style={{ marginLeft: "70px" }}>
          1800 ePHEEBO
        </p>

        <h3 className="text-uppercase text-white fw-bold text-center p-0 m-0">
          Max transfer
        </h3>
        <p className="text-white text-center  " style={{ marginLeft: "70px" }}>
          MD Common
        </p>

        <h3 className="text-uppercase text-white fw-bold text-center p-0 m-0">
          Respect for victory
        </h3>
        <p className="text-white text-center  " style={{ marginLeft: "70px" }}>
          120
        </p>

        <table className="table__layout mb-4" style={{ margin: "0 auto" }}>
          <tbody>
          <tr>
            <td>respect needed</td>
            <td>|</td>
            <td>8</td>
          </tr>
          <tr>
            <td>variable respect</td>
            <td>|</td>
            <td>25</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>|</td>
            <td>4 days</td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Level;
