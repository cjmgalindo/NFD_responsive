import React, { useState,useEffect } from "react";

import Card from "../blend-components/Card";
import Footer from "../Footer";
import Form from "react-bootstrap/Form";
import imgBag from "../../img/wallet/bag.png"
import Aos from "aos";
import "aos/dist/aos.css"


function Assets() {

  useEffect(()=>{
    Aos.init({duration:1500});

  },[])


    let cards = [];
    for (let i = 0; i < 26; i++) {
        i < 4 ?
        cards.push(
            <Card key={i} text="BAG ( 28657 )" img={imgBag}/>
        )
        :
        cards.push(
            <Card key={i}/>
        )
        
    }

  return (
    <div className="background__wallet">
      <div className="container-fluid container__wallet" data-aos="fade-down">
        <div className="container__title">
          <h3 className="container__title-title">wallet</h3>
        </div>

        <div className="row mt-5" >
        
       
    
            {/* selects */}
            <div className="col-12 ">
                <div className="box__select">
                  <div className="container_selects">
                    <div>
                      <Form.Select
                        aria-label="Default select example"
                        className="fondoSelect"
                      >
                        <option>Rarity filter</option>
                        <option value="1">Common</option>
                        <option value="2">Epic</option>
                        <option value="3">Mytic</option>
                      </Form.Select>
                    </div>
            
                    <div>
                      <Form.Select
                        aria-label="Default select example"
                        className="fondoSelect"
                      >
                        <option>Orden Direction</option>
                        <option value="1">Common</option>
                        <option value="2">Epic</option>
                        <option value="3">Mytic</option>
                      </Form.Select>
                    </div>
                    <div>
                      <Form.Select
                        aria-label="Default select example"
                        className="fondoSelect"
                      >
                        <option>Sort By</option>
                        <option value="1">Common</option>
                        <option value="2">Epic</option>
                        <option value="3">Mytic</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
            </div>

            {/* cards */}
            <div className="container__cards__blend" data-aos="fade-down">
                {cards}
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        
        
         


    
        </div>

      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default Assets