import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"

import Buttons from "../stats-components/Buttons";
import TableLucky from "../stats-components/TableLucky";
import TableRewards from "../stats-components/TableRewards";
import TableWeek from "../stats-components/TableWeek";




function Stats() {
  useEffect(()=>{
    Aos.init({duration:1500});

  },[])

  const [eTabs, setTabs] = useState({
    Week: true,
    Rewards: false,
    Lucky:false,  
  });

  function seteo(prop) {
    const tabs = {
      Week: false,
      Rewards: false,
      Lucky:false,  
    };

    setTabs({ ...tabs, [prop]: true });
  }

  let btnStyles = {
    background: "#C74C39",
  };
  return (
    <div className="background__stats">
      <div className="container-fluid container__stats" data-aos="fade-down">
        <div className="container__title">
          <h3 className="container__title-title">stats</h3>

          <div className="row">
            <Buttons seteo={seteo} btnStyles={btnStyles} eTabs={eTabs} />
            { eTabs.Week &&
              <TableWeek/> 
            }
            {eTabs.Rewards &&
              <TableRewards/>
            }
            {eTabs.Lucky &&
              <TableLucky />
            }
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default Stats;
