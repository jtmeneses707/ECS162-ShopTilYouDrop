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
      
      
      <img id="image_wrapper" src= "./img/pricetag.png"/>

      <div className = "subtitle-wrapper">
        <p className="special-text"> SCHOOL </p>

        <div> 
          <p> STANFORD UNIVERSITY PALO ALTO, CA</p>
        </div>

        <p className="special-text"> TUITION </p>

        <div> 
          <p> $11111 </p>
        </div>

        <p className="special-text"> ROOM AND BOARD, FEES, SUPPLIES </p>

        <div> 
          <p> $22222 </p>
        </div>

        <p> TOTAL RETAIL PRICE** </p>
        
        <div> 
          <p className="special-text"> $999999 </p>
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