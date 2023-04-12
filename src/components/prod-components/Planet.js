import React, { useState,useEffect } from "react";

import Associate from "../../img/season/associate.png";
import Information from "./Information";

import Aos from "aos";
import "aos/dist/aos.css"


function Planet({ seteoWindow, setText, eText, btnInfo,valueSub,
  setValueSub, }) {
  const [eSelect, setSelect] = useState(false);
  

useEffect(()=>{
      Aos.init({duration:1500});
  
    },[])





    const [value, setValue] = useState("")
    const selectCard = (e) => {
      const nodos = e.target.parentElement.childNodes;
      for (let i = 0; i < nodos.length; i++) {
        nodos[i].className = " ";
      }
      e.target.classList.toggle("card__state__select");
      setSelect(true);
  
      
      setValue(e.target.textContent)
    };






  return (

    
  
    <>
      <div className="col-12 col-md-7 col-lg-9 " style={{alignItems:"center"}} data-aos="fade-down">

        <div
          className="season__images"
          style={{ justifyItems: "start"}}
          
        >
          <div className={eSelect ? `${"card__state__select"}` : "" }
          onClick={selectCard}
          
         >
            
            <img src={Associate} alt="" />
            <p>PHEEBO</p>
          </div>
        </div>
        
        
      </div>

      <Information seteoWindow={seteoWindow} setText={setText} eSelect={eSelect} eText={eText} color={"#B06A26"} btnInfo={btnInfo} valueSub={valueSub}      
        setValueSub={setValueSub}
        value={value}/>

    </>
  );
}

export default Planet;
