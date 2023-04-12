import React from 'react'

function Buttons({seteo, btnStyles, eTabs}) {
  return (
    <div className='container__buttons_stats'>
        <div>
        <button className='button-stats' onClick={()=>seteo("Week")} style={eTabs.Week ? btnStyles: {}}>
            Weekly stats
        </button>
        </div>
        <div>
        <button className='button-stats' onClick={()=>seteo("Rewards")} style={eTabs.Rewards ? btnStyles: {}}>
            Weekly rewards
        </button>
        </div>
      <div>
      <button className='button-stats' onClick={()=>seteo("Lucky")} style={eTabs.Lucky ? btnStyles: {}}>
           lucky vault
        </button>
      </div>
      
       
    </div>
  )
}

export default Buttons