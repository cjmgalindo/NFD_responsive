import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"


function TableRewards() {
  useEffect(()=>{
    Aos.init({duration:1500});

  },[])

  return (
    <>
      <div className="container-select-stats">
        <p className="text-center text-white h2 my-5 ">Select week: </p>
        <select aria-label="Default select example" className="select-stats" style={{margin: "0 1em", }}>
          <option>31 de Octubre de 2022</option>
        </select>
      </div>
      <div className="d-flex justify-content-center">
        <table className="table__week" data-aos="fade-down">
          <thead>
            <tr>
              <td>#</td>
              <td>Wallet</td>
              <td>Respect</td>
              <td>Reward (MD Common)</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
            <tr>
              <td>1</td>
              <td>test.ss</td>
              <td>7990.68</td>
              <td>40 - Ammesia Haze</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableRewards;
