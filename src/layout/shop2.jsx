import React, { Component, Fragment } from 'react';
import { useState, useEffect } from 'react';

import './layout.css';
import './shop2.css';

//button
import GreenBtn from './../components/button/green_button.jsx';
import OrangeBtn from './../components/button/orange_button.jsx';
import RedBtn from './../components/button/red_button.jsx';


// //header
import GreenHeader from './../components/heading/green_header.jsx';
import BlueHeader from './../components/heading/blue_header.jsx';
import RedHeader from './../components/heading/red_header.jsx';


import Text1 from './../components/text-content/text.jsx';
import Image1 from './../components/image/image.jsx';
import useAsyncFetch from '../useAsyncFetch'
import { Link } from 'react-router-dom';



// USE CLASSNAME, class does not exist in REACT and was giving an error in Console. 
function Shop2(props) {



  let schoolName = props.selectedSchool;
  // states
  const [tuition, setTuition] = useState(0);
  const [fee, setFee] = useState(0);
  const [totalFee, setTotalFee] = useState(0);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);  
  const [badContent, setBadContent] = useState(false);
  let content;

  if (schoolName == "") {
    console.log("nop school")
    // setBadContent(true)
  }

  //  Fetching data from server...
  useAsyncFetch(`/api/get-school-cost?schoolName=${schoolName}`, {}, thenFun, catchFun);
  function thenFun (result) {
    console.log(result);
    if (result.other <= 0) { // negative expenses...
      setBadContent(true);
    }
    setTuition(result.tuition);
    setFee(result.other);
    setTotalFee(result.total)
    setLocation(result.location)
    setLoading(false)
  }
  function catchFun (error) {
    console.log(error);
  }

  if (!badContent){
    content = (
      <React.Fragment>
        <BlueHeader> PRICE </BlueHeader>
        <img className="image_wrapper" src= "./img/pricetag.png"/>
        <div className = "subtitle-wrapper">      
          <div className = "title-wrapper"> 
          <p className="special-text"> SCHOOL </p>
          <div className = "special-wrapper"> 
          <span>{schoolName.toUpperCase()}</span><br/>
          <span>{location.toUpperCase()}</span>
          </div>
          </div>
          <div className = "general-wrapper"> 
          <p className="special-text"> TUITION </p>
          <p> ${tuition.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </p>
          </div>
          <div className = "general-wrapper"> 
          <p className="special-text"> ROOM AND BOARD, FEES, SUPPLIES </p>
          <div className = "total-shop2-break"> 
            <p> ${fee.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </p>
          </div>
          </div>
          <div className = "total-wrapper"> 
          <span>TOTAL RETAIL PRICE**</span><br/>
          <span id = "bold-total">${totalFee.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
          </div>
        </div>
        <div className="text2-container">
            <p > **YOU MAY BE ELIGIBLE FOR A DISCOUNT! </p>
        </div>
        <Link to="/shop3" style={{ textDecoration: 'none' }}>
          <GreenBtn >SHOP FOR DISCOUNTS</GreenBtn>
        </Link>
      </React.Fragment>
    )
  } else { // bad content is true...
    content = (
      <React.Fragment>
        <RedHeader> BAD SCHOOL DATA </RedHeader>
        <p>Selected school has corrupt data...please try again.</p>
        <Link to="/shop1" style={{ textDecoration: 'none' }}>
          <RedBtn >GO BACK TO MAIN</RedBtn>
        </Link>
      </React.Fragment>
    )
  }

  return (
    <div className="main-container">
      {loading ? <p>Loading...</p> :  content}
    </div>
  )
}
export default Shop2;
