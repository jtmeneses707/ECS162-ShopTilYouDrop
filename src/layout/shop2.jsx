import React, { Component, Fragment } from 'react';
import { useState, useEffect } from 'react';

import './layout.css';
import './shop2.css';

//button
import GreenBtn from './../components/button/green_button.jsx';
import OrangeBtn from './../components/button/orange_button.jsx';

// //header
import GreenHeader from './../components/heading/green_header.jsx';
import BlueHeader from './../components/heading/blue_header.jsx';

import Text1 from './../components/text-content/text.jsx';
import Image1 from './../components/image/image.jsx';


// USE CLASSNAME, class does not exist in REACT and was giving an error in Console. 
function Shop2() {

  // state
  const [schoolName, setSchoolName] = useState('');
  const [tuition, setTuition] = useState(0);
  const [fee, setFee] = useState(0);
  const [totalFee, setTotalFee] = useState(0);
  const [loading, setLoading] = useState(true);

  let result = {};

  useEffect(() => {

    // after fetching data from server
    // before fetching from server 
    setLoading(true)
    
    // fetch(...)
    /*
    {
      schoolName: 'uc davis',
      tuition: '20000',
      fee: '1000000',
    }

    fetch()
    .then((result) => {
      result = result;
  
    })


    */

    // const { schoolName, tuition, fee } = result
    // setSchoolName(schoolName)
    // setTuition(tuition)
    // setFee(fee)
  
    setLoading(false)
  }, [])


  let content = (
    <React.Fragment>
      <BlueHeader> PRICE </BlueHeader>
      
      <img className="image_wrapper" src= "./img/pricetag.png"/>

      <div className = "subtitle-wrapper">
      
        <div className = "general-wrapper"> 
        <p className="special-text"> SCHOOL </p>
        <div className = "special-wrapper"> 
        <span>STANFORD UNIVERSITY</span><br/>
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
      
      <div className="text2-container">
          <p > **YOU MAY BE ELIGIBLE FOR A DISCOUNT! </p>
      </div>

      <GreenBtn >SHOP FOR DISCOUNTS</GreenBtn>
      
    </React.Fragment>



  )

  const data = {
    ...result
  }


  return (
    <div className="main-container">

      {loading ? <p>Loading...</p> :  content}

    </div>
  )
}
export default Shop2;

;