import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import Footer from "../Footer";

import Aos from "aos";
import "aos/dist/aos.css"


function Secret() {
  useEffect(()=>{
    Aos.init({duration:1500});

  },[])

  
  

  return (
    <>
    
      
        <div className="container__fondo">
        <div className="container">
          <nav className="navegation__secret">
            <img src={Logo} alt="" className="logo__start" />
      
            <ul className="menu">
              <li>
                <Link to="/prod" className="menu__link">
                  Start
                </Link>
              </li>
              <li>
                <Link to="/" className="menu__link">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
      
          <div className="row container" >
            <div className="col-12 col-lg-12 col-xl-6" data-aos="zoom-in-down">
              <h3 className="fw-bold mt-3 title__secret">Secret code</h3>
              <div className="ps-4">
                <p className="my-0 mt-4">
                  <span className="fw-bold">Hello</span> there, welcome to my
                  mansion!
                </p>
                <p>
                  It's Don Pablo here, and for the Alpha Gama I'm offering you to
                  PROD and DEAL from my house for free, without CPU costs. We just
                  got a new Security System, so in order to enter your personal
                  room, you need to set and use a Secret Code.
                </p>
      
                <p className="my-5">
                  Never disclose the code with anymore, and keep it in a safe
                  place!
                </p>
                <p>Lost your code or cannot remember it?</p>
                <p>
                  You can open a ticket at{" "}
                  <span className="fw-bolder">
                    NFD Discord - Reset Secret Code
                  </span>
                  , a Burgiar will help you in max 48h. There is a limit of max 3
                  Reset for each player, so keep your Secret Code in a safe place!
                </p>
      
                <div className="secretcode">
                  <h4 className="text-uppercase fw-bold secretcode__title">
                    enter secret code
                  </h4>
                  <input type="password" className="secretcode__input" />
                  <button className="text-uppercase button">let me in</button>
                </div>
              </div>
            </div>
          </div>
      
          
        </div>
        <Footer/>
      </div>
      
    </>
  );
}

export default Secret;
