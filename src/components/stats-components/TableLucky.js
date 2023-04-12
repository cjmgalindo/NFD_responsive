import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"

function TableLucky() {
    useEffect(()=>{
        Aos.init({duration:1500});
    
      },[])
    
  return (
    <>
    <div className="container-select-stats">
      <p className="text-center text-white h2 my-5 ">Select day: </p>
      <select aria-label="Default select example" className="select-stats" >
    <option>domingo , 6 de noviembre de 2022</option>
  </select>
    </div>
    <div className='d-flex justify-content-center'> 
    <table className="table__week" data-aos="fade-down">
      <thead>
        <tr>
          <td>Wallet</td>
          <td>Reward (MD Common)</td>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>
                test.ss
            </td>
            <td>
             1.78 - Amnnesia Haze
            </td>
        </tr>
        <tr>
            <td>
                test.ss
            </td>
            <td>
             1.78 - Amnnesia Haze
            </td>
        </tr>
        <tr>
            <td>
                test.ss
            </td>
            <td>
             1.78 - Amnnesia Haze
            </td>
        </tr>
        <tr>
            <td>
                test.ss
            </td>
            <td>
             1.78 - Amnnesia Haze
            </td>
        </tr>
        <tr>
            <td>
                test.ss
            </td>
            <td>
             1.78 - Amnnesia Haze
            </td>
        </tr>
        <tr>
            <td>
                test.ss
            </td>
            <td>
             1.78 - Amnnesia Haze
            </td>
        </tr>
        <tr>
            <td>
                test.ss
            </td>
            <td>
             1.78 - Amnnesia Haze
            </td>
        </tr>
        <tr>
            <td>
                test.ss
            </td>
            <td>
             1.78 - Amnnesia Haze
            </td>
        </tr>
        <tr>
            <td>
                test.ss
            </td>
            <td>
             1.78 - Amnnesia Haze
            </td>
        </tr>
        <tr>
            <td>
                test.ss
            </td>
            <td>
             1.78 - Amnnesia Haze
            </td>
        </tr>
        <tr>
            <td>
                test.ss
            </td>
            <td>
             1.78 - Amnnesia Haze
            </td>
        </tr>
      </tbody>
    </table>
    </div>
   
  </>
  )
}

export default TableLucky