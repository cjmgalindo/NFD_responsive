import React, { useState,useEffect } from "react";
import CardCoffe from '../coffe-components/CardCoffe'

import Aos from "aos";
import "aos/dist/aos.css"


function CoffeShop() {
  useEffect(()=>{
    Aos.init({duration:1500});

  },[])

  return (
    <div className="background__coffe">
        <div className="container-fluid container__coffe" >

        <div className="container__title" data-aos="fade-down">
          <h3 className="container__title-title">CoffeShop</h3>
          <h2 className="container__title-subtitle">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>

        <div className="row " data-aos="fade-down">
            <div className="col-12 col-xl-3 my-2">
            <CardCoffe/>
            </div>
            <div className="col-12 col-xl-3 my-2">
            <CardCoffe/>
            </div>
            <div className="col-12 col-xl-3 my-2">
            <CardCoffe/>
            </div>
            <div className="col-12 col-xl-3 my-2">
            <CardCoffe/>
            </div>
        </div>

        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default CoffeShop