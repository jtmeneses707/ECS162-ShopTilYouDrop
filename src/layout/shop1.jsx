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
function Shop1() {


  const [schoolName, setSchoolName] = useState('');



  //schoolname is a string, setSchoolname to change schoolname.
  // DO NOT DO THIS: schoolName = 'newValue' <- this is completely wrong
  // use setSchoolName to change the value of schoolName
  // ex: setSchoolName('newVal')


  return (
    <div className="main-container">

      <BlueHeader> SHOP TIL' YOU DROP </BlueHeader>

      <Text1>
        Tuition is the only the sticker price - you might be eligible for a big discount! Estimate the <i className="special-text"> real </i> costs of college, for schools across the country.
      </Text1>

      <Image1> ./img/shoppingcart.png </Image1>


      <div className="text2-container">
        <p > Start typing to pick a school </p>
      </div>

      <div className="input-container">
        <input type="text" id="myInput" onChange={(event) => setSchoolName(event.target.value)} />

        <div>
          <button onClick={() => {
            setSchoolName('');
            console.log(schoolName);
            document.getElementById('myInput').value = ''
          }}
            className="close-button" id="close_progress_button">&times;</button>
        </div>
      </div>



      <OrangeBtn schoolName={schoolName}>ADD TO CART</OrangeBtn>


    </div>
  )
}


export default Shop1;

