import React, { useState } from "react";
import Associate from "../../img/season/associate.png";
import Untouchable from "../../img/season/untouchable.png";
import Lieutenant from "../../img/season/lieutenant.png";
import Baron from "../../img/season/baron.png";
import Information from "./Information";

function Neigh({ seteoWindow, setText, btnInfo, eText,valueSub,
  setValueSub }) {
  const [eSelect, setSelect] = useState(false);
  const [value, setValue] = useState("")
  // limpia, selecciona la card y cambia el estado
  const selectCard = (e) => {
    const nodos = e.target.parentElement.childNodes;
    for (let i = 0; i < nodos.length; i++) {
      nodos[i].className = " ";
    }
    e.target.classList.toggle("card__state__select");
    setSelect(true);
    setValue(" | " + e.target.textContent)
  };

  return (
    <>
      <div className="col-12 col-md-7 col-lg-9">
        <div className="season__images" data-aos="fade-down">
          <div onClick={selectCard}>
            <img src={Associate} alt="" />
            <p>sativa</p>
          </div>
          <div onClick={selectCard}>
            <img src={Untouchable} alt="" />
            <p>indica</p>
          </div>
          <div onClick={selectCard}>
            <img src={Lieutenant} alt="" />
            <p>hybrid</p>
          </div>
        </div>
      </div>
      <Information
        seteoWindow={seteoWindow}
        setText={setText}
        eSelect={eSelect}
        eText={eText}
        color={"#B06A26"}
        btnInfo={btnInfo}

        valueSub={valueSub}      
        setValueSub={setValueSub}
        value={value}
      />
    </>
  );
}

export default Neigh;
