import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"


function LockSlots() {
  useEffect(()=>{
    Aos.init({duration:1500});

  },[])

  return (
    <div style={{width:"215px",margin:"0 auto"}} data-aos="zoom-in">
        <h3 className='text-uppercase fw-light bg-success text-center py-1 mb-5'>Lock Slots</h3>

        <table
                className="table__layout__blend"
                style={{ fontWeight: "700" }}
              >
                <tbody>
                <tr>
                  <td>total time</td>
                  <td>|</td>
                  <td>30 minutes</td>
                </tr>
                <tr>
                  <td>assets</td>
                  <td>|</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>fibonacci</td>
                  <td>|</td>
                  <td>0 %</td>
                </tr>
                </tbody>
              </table>
              <h3 className='text-uppercase fw-bold mb-2'>
                Assets Multiplier
              </h3>
              <h4 style={{marginLeft:"55px"}} className='mb-2'>
                0.5%
              </h4>
              <h3 className='text-uppercase fw-bold mb-2'>
                Random
              </h3>
              <h4 style={{marginLeft:"55px"}}>
               After slot are lock, we add the random bonus
              </h4>
              <h3 className='text-uppercase fw-bold mb-2'>
                total multiplier
              </h3>
              <h4 style={{marginLeft:"55px"}}>
              0.5% (+/-10%)
              </h4>

              <table
                className="table__layout__blend"
                style={{ fontWeight: "700" }}
              >
                <tbody>
                <tr>
                  <td>Neutral bonus</td>
                  <td>|</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>sativa bonus</td>
                  <td>|</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>hybrid bonus</td>
                  <td>|</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>indica bonus</td>
                  <td>|</td>
                  <td>10%</td>
                </tr>
                </tbody>
              </table>
    </div>
  )
}

export default LockSlots