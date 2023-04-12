import React, { useState,useEffect } from "react";
import Card from "../blend-components/Card";
import Footer from "../Footer";
import Form from "react-bootstrap/Form";
import TableWallet from "../wallet-components/TableWallet";
import WalletCard from "../wallet-components/WalletCard";
import FormWallet from "../wallet-components/FormWallet";
import Aos from "aos";
import "aos/dist/aos.css"



function Profile() {

  useEffect(()=>{
    Aos.init({duration:1500});

  },[])

  return (
    <div className="background__wallet">
     
      <div className="container-fluid container__wallet">
        <div className="container__title">
          <h3 className="container__title-title" data-aos="fade-down">Profile</h3>
        </div>
        
        <div className="row mt-5" data-aos="fade-down">
        
        
         


       

         
        
         <WalletCard/> 
         <FormWallet/>
        </div>
        

      </div>
    </div>
  )
}

export default Profile