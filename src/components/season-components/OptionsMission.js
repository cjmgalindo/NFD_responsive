import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"

import EarlyFinish from "./EarlyFinish";
import LockSlots from "./LockSlots";
import TableLogs from "./TableLogs";
import TableMarket from "./TableMarket";
import TableMoveDeal from "./TableMoveDeal";
import TabletTransfer from "./TabletTransfer";

function OptionsMission() {

  useEffect(()=>{
    Aos.init({duration:1500});

  },[])


  const [eTabs, setTabs] = useState(
    {
      Info:true,
      logs:false,
      slots:false,
      market:false,
      moveDeal:false,
      transfer:false})

    function seteo(prop) {
      const tabs ={
        Info:false,
        logs:false,
        slots:false,
        market:false,
        moveDeal:false,
        transfer:false,
      }

      setTabs({...tabs, [prop]:true})
    }


    let btnStyles = {
      background: "rgb(255, 0, 0, 0.15)"
    }

  return (
    <div className="col-12 col-md-12 col-lg-9 col-xl-7">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-2 col-xl-2">

          

            <div className="container__buttons mb-4">
              <button onClick={()=>seteo("Info")} style={eTabs.Info ? btnStyles: {}}>Info</button>
              <button onClick={()=>seteo("logs")} style={eTabs.logs ? btnStyles: {}}>logs</button>
              <button onClick={()=>seteo("slots")} style={eTabs.slots ? btnStyles: {}}>slots</button>
              <button onClick={()=>seteo("market")} style={eTabs.market ? btnStyles: {}}>market</button>
              <button onClick={()=>seteo("moveDeal")}  style={eTabs.moveDeal ? btnStyles: {}}>move/deal</button>
              <button onClick={()=>seteo("transfer")} style={eTabs.transfer ? btnStyles: {}}>transfer</button>
            </div>


          </div>
          <div className="container__table_missions col-12 col-md-9 col-lg-9 col-xl-10"
            
          >
          { eTabs.Info &&
            <EarlyFinish/> 
          }
          { eTabs.logs &&
            <TableLogs/> 
          }
          { eTabs.slots &&
            <LockSlots/> 
          }
          { eTabs.market &&
            <TableMarket/> 
          }
          { eTabs.moveDeal &&
            <TableMoveDeal/>
          }
          { eTabs.transfer &&
            <TabletTransfer/>
          }
     
       
       
       
       
         
         
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionsMission;
