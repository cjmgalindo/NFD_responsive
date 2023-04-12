import React, { useState,useEffect } from "react";

import Level from "../../img/level.png";
import iconOptions from "../../img/season/options.png";
import CardBlend from "../blend-components/CardBlend";
import Details from "../blend-components/Details";

import Aos from "aos";
import "aos/dist/aos.css"


function Blend() {

  useEffect(()=>{
    Aos.init({duration:1500});

  },[])



  const [value, setValue] = useState("MD COMMON");
  const [active, setActive] = useState(false);
  const [CD, setCD] = useState("CD1");

  function show(p) {
    setValue(p);
    setActive(!active);
  }
  // details
    const [detail, setDetail] = useState(true);
    

  // generador de cards
  const cards = []
  for (let i = 0; i < 30; i++) {
      if(i === 3 || i > 9){
        cards.push(
          <CardBlend text={"Finish"} key={i+8} event={()=> setDetail(false)}/>
        )
      }
      cards.push(
        <CardBlend key={i+17675} event={()=> setDetail(true)}/>
      )
  }
  const cardsCD2 = []
  for (let j = 0; j < 30; j++) {
      if(j === 2 || j > 9){
        cardsCD2.push(
          <CardBlend img={Level} text={"Finish"} key={j} event={()=> setDetail(false)}/>
        )
      }
      cardsCD2.push(
        <CardBlend img={Level} key={'b'+j} event={()=> setDetail(true)}/>
      )
  }

  


  return (
    <div className="background__blend">
      <div className="container-fluid" data-aos="fade-down">
        <div className="row container__blend">

          <div className="col-12 col-md-8"  >
            <div className="box_title__blend">
              <p className="text-uppercase fw-bold prod__title ms-4">Blend</p>
              <div className="btns__blend">
                <button  onClick={() => setCD("CD1")} style={CD === "CD1" ? {background: "#645164"}: {}}>CD1</button>
                <button  onClick={() => setCD("CD2")} style={CD === "CD2" ? {background: "#645164"}: {}}>CD2</button>
              </div>
            </div>

            {CD === "CD1" && (
              <>
                <div className="row mb-2">
                  <div className="col-12 col-md-6">
                    <p className="text-uppercase fw-normal prod__subtitle">
                      Select your items
                      <span className="text-uppercase">
                        1/12 items ready for blending
                      </span>
                    </p>
                  </div>
                  <div className="col-12 col-md-6 d-flex justify-content-end align-items-center">
                    <div
                      className={`blend__container__options ${
                        active ? "select_blend_active" : ""
                      }`}
                      onClick={() => setActive(!active)}
                    >
                      <div className="blend__box__button">
                        <p>{value}</p>
                        <img src={iconOptions} alt="" />
                      </div>

                      <div className="blend__box__options">
                        <div onClick={() => show("option 1")}>option 1</div>
                        <div onClick={() => show("option 2")}>option 2</div>
                        <div onClick={() => show("option 3")}>option 3</div>
                        <div onClick={() => show("option 4")}>option 4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="container__cards__blend "  data-aos="fade-down"
                  
                >
                {cards}
                  
                </div>
                <div>
                  <p className="text-uppercase fw-bold h2 text-end pe-5 pt-4">
                    Confirm blend
                  </p>
                  <div className="d-flex flex-column justify-content-end align-items-end ">
                    <table
                      className="table__layout__blend"
                      style={{ fontWeight: "700" }}
                    >
                      <tbody>
                        <tr>
                          <td>items</td>
                          <td>|</td>
                          <td>4</td>
                        </tr>
                        <tr>
                          <td>blend cost</td>
                          <td>|</td>
                          <td>0$PBO</td>
                        </tr>
                      </tbody>
                    </table>
                    <button className="btn-mediam me-5">Blend</button>
                  </div>
                </div>
              </>
            )}

            {CD === "CD2" && (
              <>
                <div className="row mb-2">
                  <div className="col-12 col-md-6">
                    <p className="text-uppercase fw-normal prod__subtitle">
                      Select your items
                      <span className="text-uppercase">
                        1/12 items ready for blending
                      </span>
                    </p>
                  </div>
                  <div className="col-12 col-md-6 d-flex justify-content-end align-items-center">
                    <div
                      className={`blend__container__options ${
                        active ? "select_blend_active" : ""
                      }`}
                      onClick={() => setActive(!active)}
                    >
                      <div className="blend__box__button">
                        <p>{value}</p>
                        <img src={iconOptions} alt="" />
                      </div>

                      <div className="blend__box__options">
                        <div onClick={() => show("option 1")}>option 1</div>
                        <div onClick={() => show("option 2")}>option 2</div>
                        <div onClick={() => show("option 3")}>option 3</div>
                        <div onClick={() => show("option 4")}>option 4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="container__cards__blend" data-aos="fade-down"
                >
                  {cardsCD2}
                </div>
                <div>
                  <p className="text-uppercase fw-bold h2 text-end pe-5 pt-4">
                    Confirm blend
                  </p>
                  <div className="d-flex flex-column justify-content-end align-items-end ">
                    <table
                      className="table__layout__blend"
                      style={{ fontWeight: "700" }}
                    >
                      <tbody>
                        <tr>
                          <td>items</td>
                          <td>|</td>
                          <td>4</td>
                        </tr>
                        <tr>
                          <td>blend cost</td>
                          <td>|</td>
                          <td>0$PBO</td>
                        </tr>
                      </tbody>
                    </table>
                    <button className="btn-mediam me-5">Blend</button>
                  </div>
                </div>
              </>
            )}
          </div>

        {/* aqui van los detalles */}
          <div className="col-12 col-md-4 " >
            <h2 className="text-uppercase fw-bold text-white text-center score-blend">
              Details
            </h2>
            
            {detail ? <Details/> : <Details vs="Finish"/>}
            
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Blend;
