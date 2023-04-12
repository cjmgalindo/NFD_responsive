import React from 'react'




// function SelectCard( {state, setstate} ) {
//     const selectorCards = (e) =>{
//         e.target.classList.toggle(s["select"]);
//     }
    
//     const card = [];
//     for (let i = 0; i < 21; i++) {
//         card.push(
//             <div className={s.card } key={i} onClick={selectorCards}>

//                 <img src={state.img} alt="" />
//                 <p style={{fontWeight:"bold", margin:".8em 0 1.3em", pointerEvents:"none"}}>
//                     BIKE (001)
//                 </p>
                
//             </div>
//         )   
//     }

  
//   return (
//     <>
//         {state.active &&
//             <div className={s.containerModalAddCard}>

//                 <div className={s.boxModalAddCard}>
//                     <h1 
//                     className={s.btnExit} 
//                     onClick={()=> setstate(false)}
                    
//                     >x</h1>
//                     <h1 style={{fontWeight:"bold"}}>SELECT {state.tittle}</h1>

                    

//                     <div className={s.cards}>
//                         {card}
//                     </div>

//                     <button className={`${s.btnConfirm} button`}>
//                         <h5>CONFIRM</h5>
//                     </button>

//                 </div> 
//             </div>
//         } 
//     </>
//   )
// }

// export default SelectCard