import React from 'react'
import moustache from '../../img/moustache.png'

function Preloader() {
  return (
    <div className="PagePreloader " style={{heigth:"100vh", width:"100vw", background:"#202020"}}>
        <div className="containerLoader">
            <img src={moustache} alt="Ds"/>
            
            <div className='box_loader'>

                <div className='dot-spinner'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              
              <p>LOADING</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default Preloader