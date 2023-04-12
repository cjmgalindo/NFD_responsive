import React, { useState,useEffect } from "react";
import bag from "../../img/wallet/bag.png";
import Aos from "aos";
import "aos/dist/aos.css"



function Details({vs}) {

    useEffect(()=>{
        Aos.init({duration:1500});
    
      },[])
    

    const cards = []
    for (let i = 0; i < 6; i++) {
        cards.push(
            <div className='card__details' key={i} style={vs === "Finish" ? {opacity:".4"}: {}} >
                <div className='box__img'>
                    <img src={bag} alt="" style={{userSelect:"none", pointerEvents:"none"}}/>
                </div>
                <h3>PHI S46368</h3>
                <span>You own: 10</span>
            </div>
        )
    }



  return (
    <div className='container__details_blend'>
        
            <div className='box__title_details' >
                <div className='title_details'>
                    <h2>phs [ 28657 ]</h2>
                    <span> 73 / 00 </span>
                </div>
                
                <h1>requeriments</h1>
            </div>
            
            <div className="cards__details" >
                {cards}
            </div>
            <button>autoselect</button>
        
    </div>
  )
}

export default Details