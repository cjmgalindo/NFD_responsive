import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"

import CardBattle from "../battle-components/CardBattle";
import Equip from "../battle-components/Equip";
import Vs from "../battle-components/Vs";
import Lieutenantt from "../../img/battle/lieutenant-2.png";
import Lieutenant from "../../img/battle/lieutenant-neutral.png";


function Battle() {

  useEffect(()=>{
    Aos.init({duration:1500});

  },[])


  const [eTab, setTab] = useState(true);
  let bg = {
    background: "#754F38",
  };
  return (
    <div className="background__battle">
    
      <div className="container-fluid container__battle" data-aos="fade-down">
        <div className="container__title">
          <h3 className="container__title-title">battle</h3>
          <h2 className="container__title-subtitle">
            equip your character and start fighting!
          </h2>
        </div>

        <div className="row " data-aos="fade-down">
          <div className="col-12" >
            <div className="layout__battle">
              {eTab && <Equip />}

              {!eTab && (
                <>
                  <CardBattle img={Lieutenant} text={"100"} width={100} />
                  <Vs />
                  <CardBattle img={Lieutenantt} text={"50"} width={50} />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="battle__buttons">
          <button onClick={() => setTab(true)} style={eTab ? bg : {}}>
            Equip
          </button>
          <button onClick={() => setTab(false)} style={!eTab ? bg : {}}>
            Macth
          </button>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Battle;
