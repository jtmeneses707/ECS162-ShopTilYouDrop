import React, { Component, Fragment } from 'react';
import { useState, useEffect } from 'react';

import './layout.css';

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

     

      <Image1> ./img/receipt.png </Image1>
        

        <div className="text2-container">
          <p > Start typing to pick a school </p>
        </div>

        <div className="input-container">
          <input type="text" />
          <div>
            <button className="close-button" id="close_progress_button">&times;</button>
          </div>
        </div>

      

      <OrangeBtn>START OVER</OrangeBtn>


    </div>
  )
}
export default Shop4;

