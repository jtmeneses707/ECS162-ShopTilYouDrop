import React, { Component, Fragment } from 'react';
import { useState, useEffect } from 'react';

import './layout.css';
import './shop4.css';

//button
import GreenBtn from './../components/button/green_button.jsx';
import OrangeBtn from './../components/button/orange_button.jsx';

// //header
import GreenHeader from './../components/heading/green_header.jsx';
import BlueHeader from './../components/heading/blue_header.jsx';

import Text1 from './../components/text-content/text.jsx';
import Image1 from './../components/image/image.jsx';

// USE CLASSNAME, class does not exist in REACT and was giving an error in Console. 
function Shop4() {
  return (
    <div className="main-container">

      <BlueHeader> TOTAL </BlueHeader>
      <img id = "image-shop4" src= "./img/receipt.png"/>  

      <div className = "subtitle-wrapper">

        <div className = "general-wrapper"> 
        <div className = "special-wrapper"> 
        <span className = "special-text">STANFORD UNIVERSITY</span><br/>
        <span>PALO ALTO, CA</span>
        </div>

      </div>

        <div className = "general-wrapper"> 
        <p className="special-text"> TUITION </p>
        <p> $11111 </p>
        </div>


        <div className = "general-wrapper"> 
        <p className="special-text"> ROOM AND BOARD, FEES, SUPPLIES </p>
        <div className = "total-shop2-break"> 
          <p> $22222 </p>
        </div>
        </div>


        <div className = "total-wrapper"> 
        <span>TOTAL RETAIL PRICE**</span><br/>
        <span id = "bold-total">$999999</span>
        </div>


      </div>

      <OrangeBtn>START OVER</OrangeBtn>


    </div>
  )
}
export default Shop4;

