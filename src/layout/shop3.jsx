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
function Shop3() {
  return (
    <div className="main-container">

      <GreenHeader> DISCOUNTS </GreenHeader>

      <div className="main-display">

      <Text1>
         Remember, tuition is only the sticker price - you might be eligible for a big discount! 
      </Text1>


        <Text1> 
        Let's see if you qualify for any discounts. 
        </Text1>

      <Image1> ./img/discount.png </Image1>
        

        <div className="text3-container">
          <p > Family Income </p>
        </div>

        <div className="select-container">
          <select required onChange={(event) => setSchoolName(event.target.value)} >
                    <option value="" disabled selected hidden>Select Income Range</option>
                    <option value="Walk">$0 - $30,000</option>
                    <option value="Run">$30,001 - $48,000</option>
                    <option value="Swim">$48,001 - $75,000</option>
                    <option value="Bike">$75,001 - $110,000</option>
                    <option value="Yoga">$110,001 +</option>
                  </select>
          
        </div>

      </div>

      <GreenBtn>GO</GreenBtn>


    </div>
  )
}
export default Shop3;

