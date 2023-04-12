import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"


function TabletTransfer() {
  useEffect(()=>{
    Aos.init({duration:1500});

  },[])

  return (
    <table className="tabla_mision" data-aos="zoom-in">
    <thead>
      <tr>
        <td colSpan={6}>
          <h4 className="text-secondary fw-bold pb-1">
            Total transfer 0.00 ePHEEBO
          </h4>
          <div className="container__header-table mb-3 ">
            <button>transfer</button>
            <button>Refresh</button>
          </div>
        </td>
      </tr>
      <tr >
        <td>Nfd</td>
        <td>Price %</td>
        <td>You have</td>
        <td>Weight - Rarity</td>
        <td>Quanty to transfer</td>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td>Nepal Palm ATOM</td>
          <td>2%</td>
          <td>
            2
          </td>
          <td>
             Common
          </td>
          <td>
             10
          </td>
        </tr>


    </tbody>
  </table>
  )
}

export default TabletTransfer