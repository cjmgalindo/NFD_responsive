import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"
import Vince from '../../img/gangs/vince-testa.png'
import Pam from '../../img/gangs/pam-mei.png'



function MakeAndJoin({state, setState}) {
    
useEffect(()=>{
    Aos.init({duration:1500});

  },[])

  return (
    <div className='col-12' data-aos="fade-down">
        <div className='container__gangs-characters'>
            <div className="container__make">
                <img src={Vince} alt="" />
                <div className="container__make-button">
                    <button onClick={()=>setState({...state, Make:true})}>make</button>
                </div>
            </div>
            <div className="container__make">
            <img src={Pam} alt="" />
                <div className="container__make-button">
                    <button onClick={()=>setState({...state, Join:true})}>join</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MakeAndJoin