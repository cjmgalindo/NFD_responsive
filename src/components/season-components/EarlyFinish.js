import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"

function EarlyFinish() {
  useEffect(()=>{
    Aos.init({duration:1500});

  },[])

  return (
    <div style={{width:"215px",margin:"0 auto"}} data-aos="zoom-in">
        <h3 className='text-uppercase fw-bold bg-danger text-center py-1 mb-5'>early finish (22:48:17)</h3>

        <table
                className="table__layout__blend"
                style={{ fontWeight: "700" }}
              >
                <tbody>
                <tr>
                  <td>mission</td>
                  <td>|</td>
                  <td>associate</td>
                </tr>
                <tr>
                  <td>difficulty</td>
                  <td>|</td>
                  <td>easy</td>
                </tr>
                <tr>
                  <td>entry free</td>
                  <td>|</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>start date</td>
                  <td>|</td>
                  <td>6/11/22 3:30</td>
                </tr>
                </tbody>
              </table>
              <h3 className='text-uppercase fw-bold mb-2'>
                Max Finish date
              </h3>
              <h4 style={{marginLeft:"55px"}} className='mb-2'>
                10/11/22 3:30
              </h4>
              <h3 className='text-uppercase fw-bold mb-2'>
                CountDown finish date
              </h3>
              <h4 style={{marginLeft:"55px"}}>
                3D and 21:27:06
              </h4>
              <h3 className='text-uppercase fw-bold mb-2'>
                max transfer
              </h3>
              <h4 style={{marginLeft:"55px"}}>
                MD Common
              </h4>
              <h3 className='text-uppercase fw-bold mb-2'>
                max amount tranfer
              </h3>
              <h4 style={{marginLeft:"55px"}}>
                50 Common MDs
              </h4>
              <table
                className="table__layout__blend"
                style={{ fontWeight: "700" }}
              >
                <tbody>
                <tr>
                  <td>respect needed</td>
                  <td>|</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>variable respect</td>
                  <td>|</td>
                  <td>10%</td>
                </tr>
                </tbody>
              </table>
    </div>
  )
}

export default EarlyFinish