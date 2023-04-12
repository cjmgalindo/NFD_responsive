import React, { useState,useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"
import ImagesGroup from "../season-components/ImagesGroup";
import InfoMision from "../season-components/InfoMision";
import Level from "../season-components/Level";
import Membership from "../season-components/Membership";
import MissionCards from "../season-components/MissionCards";
import OptionsMission from "../season-components/OptionsMission";

function Season() {

  useEffect(()=>{
    Aos.init({duration:1500});

  },[])


  const [eWindow, setWindow] = useState(
    {
      Membership:true,
      Level:false,
      Missions:false,
      Options:false,
      })

    function seteo(prop) {
      const tabs ={
        Membership:false,
      Level:false,
      Missions:false,
      Options:false,
      }

      setWindow({...tabs, [prop]:true})
    }

    const[eText , setText] = useState({
      tittle: "Membership",
      subtitle: "Lorem ipsum dolor sit Amet."
    })

  return (
    <div className="background__season">
      <div className="container-fluid container__season" data-aos="fade-down">
      
      <div className="container__title">
            <h3 className="container__title-title">{eText.tittle}</h3>
            <h2 className="container__title-subtitle">
              {eText.subtitle}
            </h2>
          
          </div>
        <div className="row">
        {eWindow.Membership  && 

            <Membership btn={seteo} setText={setText}/>
      
        }

        {eWindow.Level && 
         <Level btn={seteo} setText={setText}/>
        }
        {eWindow.Missions &&
          <>
            <ImagesGroup  btnStart={seteo}/>
            <InfoMision />
          </>
        }
         {eWindow.Options &&
            <>
              <MissionCards/>
              <OptionsMission/>
            </>
         }
          
        </div>
      </div>

    </div>
  );
}

export default Season;
