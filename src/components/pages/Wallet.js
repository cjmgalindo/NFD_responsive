import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"

import Card from "../blend-components/Card";
import Form from "react-bootstrap/Form";
import TableWallet from "../wallet-components/TableWallet";


function Wallet() {
  useEffect(()=>{
    Aos.init({duration:1500});

  },[])

  const [eTabs, setTabs] = useState(
    {
      Cards:true,
      Table: false,
    })

    function seteo(prop) {
      const tabs ={

        Cards:false,
      Table: false,
      }

      setTabs({...tabs, [prop]:true})
    }

    const cards =[]
    for (let i = 0; i < 20; i++) {
      cards.push(
        <Card key={i}/>
      )
      
    }


    let btnStyles = {
      background: "#C74C39"
    }
  return (
    <div className="background__wallet">
      <div className="container-fluid container__wallet" data-aos="fade-down">
        <div className="container__title">
          <h3 className="container__title-title">wallet</h3>
        </div>

        <div className="row mt-5">
        
        { eTabs.Cards &&
          <>
            {/* selects */}
            <div className="col-12 ">

            <div className="box__select">
                {/* <div className="float-end"> */}
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
                        
                        
            </div>
          </>
        }
        { eTabs.Table &&
          <TableWallet/>
        }
         


       {/*    
       buttones
       <div className="col-12 ">
            <div className="float-end">
              <div className="container_selects">
                <div>
               <button className="button">Use in Prod</button>
                </div>

                <div>
                <button className="button">Use in Deal</button>
                </div>
                <div>
                <button className="button">Not in Use</button>
                </div>
              </div>
            </div>
          </div>  */}

         
        
         {/* <WalletCard/> */}
         {/* <FormWallet/> */}
        </div>

        <div className="battle__buttons" >
          <button onClick={()=>seteo("Cards")} style={eTabs.Cards ? btnStyles: {}}>Game items</button>
          <button onClick={()=>seteo("Table")} style={eTabs.Table ? btnStyles: {}}>Logs W</button>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Wallet;
