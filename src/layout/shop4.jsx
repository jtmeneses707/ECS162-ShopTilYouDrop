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
import useAsyncFetch from '../useAsyncFetch'
import { Link } from 'react-router-dom';



// USE CLASSNAME, className
// does not exist in REACT and was giving an error in Console.
function Shop4(props) {
  let schoolName = props.selectedSchool;
  // let schoolName = "University of California-Berkeley"
  let range = props.selectedRange;
  const [tuition, setTuition] = useState(0);
  const [fee, setFee] = useState(0); // other
  const [totalFee, setTotalFee] = useState(0);
  const [totalWithDiscount, setTotalWithDiscount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);


  //  Fetching data from server...
  useAsyncFetch(`/api/get-school-discount?schoolName=${schoolName}&range=${range}`, {}, thenFun, catchFun);
  function thenFun(result) {
    console.log(result);
    setTuition(result.tuition);
    setFee(result.other);
    setTotalFee(result.total);
    setTotalWithDiscount(result.discounted_price_total);
    setDiscount(result.discount);
    setLocation(result.location);
    setLoading(false)
  }
  function catchFun(error) {
    console.log(error);
  }

  let content = (
    <React.Fragment>
      <BlueHeader> TOTAL </BlueHeader>
      <div className="main-subtitile-shop4">
        <div className="table-wrapper">
          <div className="title-wrapper-shop4">
            <span className="special-text">{schoolName.toUpperCase()}</span><br />
            <span>{location.toUpperCase()}</span>
          </div>
        </div>
        <div className="table-wrapper1">
          <div id="table">
            <table>
              <tbody>
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
                      ="itemtext">${tuition.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                  </td>
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
                      ="itemtext">${fee.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p></td>
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
                      ="itemtext">${totalFee.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p></td>
                </tr>
              </tbody>
            </table>
            <div id="table-total">
              <table>
                <tbody>
                  <tr className
                    ="tabletitle">
                    <td className
                      ="discount"><p>DISCOUNT</p></td>
                    <td className="blank"></td>
                    <td className
                      ="payment"><p>-${discount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p></td>
                  </tr>
                  <tr className
                    ="tabletitle">
                    <td className
                      ="total-text"><p>TOTAL</p></td>
                    <td></td>
                    <td className
                      ="total"><p>${totalWithDiscount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}*</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="table-wrapper">
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
      <Link to="/shop1" style={{ textDecoration: 'none' }}>
        <OrangeBtn>START OVER</OrangeBtn>
      </Link>
    </React.Fragment>
  )

  return (
    <div className="main-container">
      {loading ? <p>Loading...</p> : content}
    </div>
  )
}
export default Shop4;

