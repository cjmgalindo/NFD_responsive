import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"

import CardSeason from './CardSeason';
import cardGold from '../../img/gold_pss.png'
import ModalCards from "../Modals/ModalCards";

function Membership({btn,setText}) {

  useEffect(()=>{
    Aos.init({duration:1500});

  },[])


  const [eModalSelect, setModalSelect] = useState({
    active:false,
    img: "",
    tittle: "Card",
  });

  const [MSMembership, setMSMembership] = useState(false)


  return (
    
        

        

       <>
         <div className="row col-12 container__cards_membership" data-aos="fade-down">
             <div className="col-12 col-xl-2 my-2" 
             >
             <CardSeason/>
             </div>
             <div className="col-12 col-xl-2 my-2">
             <CardSeason/>
             </div>
             <div className="col-12 col-xl-2 my-2">
             <CardSeason/>
             </div>
             <div className="col-12 col-xl-2 my-2">
             <CardSeason/>
             </div>
             
             <div className=" col-12 my-2 col-xl-4" style={{ marginTop: "100px" }}>
        
             <div className=" d-flex flex-column justify-content-center align-items-center  col-12 col-xl-3 my-2 cardcoffe" 
             style={{ width:"auto"}} >
             
                <h1
                 style={{color:"white", fontWeight:"bold"}}
                 >STAKE</h1>
                 <img src={cardGold} alt="" className="" style={{width:"20rem"}}  />
                 
                 
                 
                 <button  
                 style={{color:"white", fontWeight:"bold", background:"black",padding:"1.2rem", width:"14rem", height:"4rem", fontSize:"1.4rem", border:"none", borderRadius:"2rem", outline:"none", marginTop:"1.5rem"}}
                 
                 onClick={() => setMSMembership(!MSMembership)}
                 >
                     OPTION 1
                 </button>
        
                 <div className="center d-flex flex-column justify-content-center align-items-center" style={{marginTop:"1.5rem"}}>
                     <p
                     style={{color:"white", fontWeight:"bold", margin:"0",     }}
                     >CONFIRM SELECTION</p> 
                     <button className="container__coffe-button" 
                     style={{background:"#725648", width:"12rem", margin:"0"}}
                     onClick={ ()=>{
                 
                        btn("Level");
                        setText({
                            tittle: "LEVEL",
                            subtitle: "Lorem ipsum dolor sit Amet."
                            })
                        }
                        
                        }
                     >NEXT</button>
                 </div>

             </div>
        
             
            </div>
             
         </div>
         {/* <SelectCard state={eModalSelect} setstate={setModalSelect}/> */}
         {MSMembership && (
            <ModalCards state={MSMembership} setstate={setMSMembership} img={cardGold} />
          )}
       </>
     
    
  )
}

export default Membership