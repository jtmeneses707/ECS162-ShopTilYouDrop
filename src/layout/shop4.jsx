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

// USE CLASSNAME, className
// does not exist in REACT and was giving an error in Console. 
function Shop4() {
  return (
    <div className="main-container">

      <BlueHeader> TOTAL </BlueHeader>
      <img id="image-shop4" src="./img/receipt.png" />

      <div className="main-subtitile-shop4">


        <div className = "table-wrapper"> 
        <div className = "title-wrapper-shop4"> 
        <span className="special-text">STANFORD UNIVERSITY</span><br/>
        <span>PALO ALTO, CA</span>
        </div>
        </div>

        <div className = "table-wrapper1"> 
        <div id="table">
          <table>
            <tr className="tabletitle">
              <td className="item"><h2 >QTY</h2></td>
              <td className="des"><h2>DESCRIPTION</h2></td>
              <td className="amount"><h2>AMOUNT</h2></td>
            </tr>
             

            <tr className="service">
              <td className="tableitem"><p className
                ="itemtext">1</p></td>
              <td className
                ="tableitem"><p className="itemtext" className
                ="text1">TUITION</p></td>
              <td className
                ="tableitem"><p className
                  ="itemtext">$51,375</p></td>
            </tr>

            <tr className
              ="service">
              <td className
                ="tableitem"><p className
                  ="itemtext">1</p></td>
              <td className
                ="tableitem"><p className
                  ="itemtext" className
                ="text1">FEES, SUPPLIES AND LIVING EXPENSES</p></td>
              <td className
                ="tableitem"><p className
                  ="itemtext">$17,775</p></td>
            </tr>

            <tr className
              ="service">
              <td></td>
              <td className
                ="tableitem"><p className
                  ="itemtext" className
                ="text2">SUBTOTAL</p></td>
              <td className
                ="tableitem"><p className
                  ="itemtext">$69,109</p></td>
            </tr>

            </table>

            <div id="table-total">
            <table>
            
            <tr className
              ="tabletitle">
              <td className
                ="discount"><p>DISCOUNT</p></td>
              <td className="blank"></td>
              <td className
                ="payment"><p>-$68,658</p></td>
            </tr>

            <tr className
              ="tabletitle">
              <td className
                ="total-text"><p>TOTAL</p></td>
              <td></td>
              <td className
                ="total"><p>$3,644.25*</p></td>
            </tr>
           </table>
          </div>
          
          
        </div>
        </div>
        
        
        <div className = "table-wrapper"> 
        <div id="legalcopy">
          <div> <p>* </p></div>
          <div> 
          <p className
            ="legal"> This estimate is based on actual costs for families that received federal aid or loans by applying with the FAFSA form. It always pays to ask for a discount!</p>
          <p className
            ="legal"> Cost includes tuition, living costs, books and supplies, and fees minus the average grants and scholarships for federal financial aid recipients. </p>
          <p className
            ="legal"> Depending on the feral state, or institutional grant aid available, students in your income bracket may pay more or less than the overall average costs. </p>
          </div>
        </div>
        </div>

      </div>



      <OrangeBtn>START OVER</OrangeBtn>


    </div>
  )
}
export default Shop4;

