import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"

import MakeAndJoin from "../gangs-components/MakeAndJoin";
import ModalGang from "../gangs-components/ModalGang";

function Gangs() {

  
useEffect(()=>{
  Aos.init({duration:1500});

},[])


  const [emodal, setModal] = useState({
    Make: false,
    Join:false,
  })


  return (
    <div className="background__gangs">
      <div className="container-fluid container__gangs" data-aos="fade-down">
        <div className="container__title">
          <h3 className="container__title-title">Gangs</h3>
          {/*  <h2 className="container__title-subtitle">
              Create or join a gang!
            </h2> */}
          <h2 className="container__title-subtitle">
            Rank Gang{" "}
            <span style={{ fontSize: "12px" }}>14/16 slots occupied</span>
          </h2>
        </div>

        <div className="row">
        {/* <CardGang/> */}
          <MakeAndJoin state={emodal} setState={setModal}/>
        
        { emodal.Make &&
          <ModalGang state={emodal} setState={setModal} text={
            {
              name: "Make",
              info: `To start a clan you need a "temp-gang" box`,
              details: "No temp-gang box yet"
            }
          }/> 
        }

       

        
        {emodal.Join &&
          <ModalGang state={emodal} setState={setModal} text={
            {
              name: "Join",
              info: "To join a clan you need a gang membership",
              details: "No membership NFT yet",
              link: "/Gangs/rank"
            }
          }/> 
        }
         
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Gangs;
