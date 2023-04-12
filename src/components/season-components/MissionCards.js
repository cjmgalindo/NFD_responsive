import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"
import Card from '../blend-components/Card'
import bike from '../../img/season/bike.png'
import Phi from "../../img/phi201.png";
import PadLock from "../../img/padlock.png";
import ModalText from '../Modals/ModalText';
import ModalCards from '../Modals/ModalCards';


function MissionCards() {

  useEffect(()=>{
    Aos.init({duration:1500});

  },[])


  const [modalText, setModalText] = useState(false);
  const [MSPhi, setMSPhi] = useState(false);
  return (
    <div  className="col-12 col-md-12 col-lg-3 col-xl-5" >

        <div className="container__cards_mission">

            <Card img={Phi} text={"PHS ( 28657 )" } color={"rgb(254, 175, 0)"}/>
            <Card img={bike} text={"BIKE ( 001 )" } color={"rgb(255,255,255)"}/>

            {MSPhi && (
                          <ModalCards
                            state={MSPhi}
                            setstate={setMSPhi}
                            img={Phi}
                  />
            )}
             
            <div className="card__prod " onClick={() => setMSPhi(!MSPhi)}>
                <img src={PadLock} style={{width:"8em",height:"8em"}}  />
                <button style={{width:"10em"}} className="btn btn-dark btn-lg btn-block position-absolute bottom-0 m-2 w-9em" >SELECT BAG</button>
              </div>

              <div className="card__prod " onClick={() => setMSPhi(!MSPhi)}>
                <img src={PadLock} style={{width:"8em",height:"8em"}}  />
                <button style={{width:"10em"}} className="btn btn-dark btn-lg btn-block position-absolute bottom-0 m-2 w-9em" >SELECT BAG</button>
              </div>

              {modalText && (
                  <ModalText state={modalText} setState={setModalText} />
                )}


            <div className="card__prod__locked_slot" onClick={() => setModalText(!modalText)}>
                <p className="fw-bold pt-2">LOCKED SLOT</p>
                <img src={PadLock} alt="" />
                
              </div>
              <div className="card__prod__locked_slot" onClick={() => setModalText(!modalText)}>
                
                <p className="fw-bold pt-2">LOCKED SLOT</p>
                <img src={PadLock} alt="" />
            
              </div>
              <div className="card__prod__locked_slot" onClick={() => setModalText(!modalText)}>
                
                <p className="fw-bold pt-2">LOCKED SLOT</p>
                <img src={PadLock} alt="" />
              </div>
              <div className="card__prod__locked_slot" onClick={() => setModalText(!modalText)}>
                
                <p className="fw-bold pt-2">LOCKED SLOT</p>
                <img src={PadLock} alt="" />
              </div>
        </div>

        <table
                className="table__layout__blend"
                style={{ fontWeight: "700" ,marginTop:"20px"}}
              >
                <tbody>
                <tr>
                  <td>loan</td>
                  <td>|</td>
                  <td>12000</td>
                </tr>
                <tr>
                  <td>Pay back</td>
                  <td>|</td>
                  <td>13200</td>
                </tr>
                <tr>
                  <td>wallet</td>
                  <td>|</td>
                  <td>12000</td>
                </tr>
                <tr>
                  <td>objective</td>
                  <td>|</td>
                  <td>15000</td>
                </tr>
                <tr style={{background:'red'}}>
                  <td>P/l</td>
                  <td>|</td>
                  <td>-1200</td>
                </tr>
                </tbody>
        </table>
    </div>
  )
}

export default MissionCards