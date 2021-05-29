import React, { Component, Fragment } from 'react';
import { useState, useEffect } from 'react';

import './layout.css';
import './shop3.css';

//button
import GreenBtn from './../components/button/green_button.jsx';
import OrangeBtn from './../components/button/orange_button.jsx';

//header
import GreenHeader from './../components/heading/green_header.jsx';
import BlueHeader from './../components/heading/blue_header.jsx';

import Text1 from './../components/text-content/text.jsx';
import Image1 from './../components/image/image.jsx';
import { Link } from 'react-router-dom';


// USE CLASSNAME, class does not exist in REACT and was giving an error in Console. 
function Shop3(props) {
  const [rangeLocal, setRangeLocal] = useState(0); // name, ID useAsynchFetch will set it first... 

  const onChangeHandler = (event) => { // (state is saved in parent)
    props.onSaveRange(event.target.value)
    setRangeLocal(event.target.value)
  };
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
        <div>
        <div className="text3-container">
          <p > Family Income </p>
        </div>
        <div>
          <select required onChange={onChangeHandler}>
            <option id="standard-option" value="">Select Income Range</option>
            <option value="0-30000">$0 - $30,000</option>
            <option value="30001-48000">$30,001 - $48,000</option>
            <option value="48001-75000">$48,001 - $75,000</option>
            <option value="75001-110000">$75,001 - $110,000</option>
            <option value="110001-plus">$110,001 +</option>
          </select>
        </div>
        </div>
      </div>
      {
        rangeLocal == 0 ?
          <Link to="/shop3" style={{ textDecoration: 'none' }}>
            <GreenBtn>GO</GreenBtn>
          </Link>
          :
          <Link to="/shop4" style={{ textDecoration: 'none' }}>
            <GreenBtn>GO</GreenBtn>
          </Link>
      }
    </div>
  )
}
export default Shop3;

