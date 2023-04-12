import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"

function TableLogs() {
    useEffect(()=>{
        Aos.init({duration:1500});
    
      },[])
    
  return (
    <table className='table__log' data-aos="zoom-in">
        <thead>
            <tr>
                <td>Date/Time</td>
                <td>Action Name</td>
                <td>Value</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    06/11/22 03:30
                </td>
                <td>
                    Star Mission
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default TableLogs