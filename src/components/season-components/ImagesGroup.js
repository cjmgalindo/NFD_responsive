import React, { useState } from "react";
import Associate from "../../img/season/associate.png";
import Untouchable from "../../img/season/untouchable.png";
import Lieutenant from "../../img/season/lieutenant.png";
import Baron from "../../img/season/baron.png";
function ImagesGroup({btnStart}) {
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
    <div className="col-12 col-md-8 " data-aos="fade-down">
      <div className="season__images" >
        <div onClick={selectCard}>
          <img src={Associate} alt="" />
        </div>
        <div onClick={selectCard}>
          <img src={Untouchable} alt="" />
        </div>
        <div onClick={selectCard}>
          <img src={Lieutenant} alt="" />
        </div>
        <div onClick={selectCard}>
          <img src={Baron} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 confirm-mision">
          <h3 className="text-white fw-bold text-uppercase ">
            {" "}
            Confirm mission
          </h3>
          <button onClick={()=>{ eSelect ? btnStart("Options") : console.log("")}}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default ImagesGroup;
