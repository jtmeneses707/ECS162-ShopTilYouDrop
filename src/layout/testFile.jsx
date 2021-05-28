import React, { Component, Fragment } from 'react';
import { useState, useEffect } from 'react';
import './layout.css';
import useAsyncFetch from '../useAsyncFetch'
//button
import GreenBtn from './../components/button/green_button.jsx';
import OrangeBtn from './../components/button/orange_button.jsx';
//header
import GreenHeader from './../components/heading/green_header.jsx';
import BlueHeader from './../components/heading/blue_header.jsx';
import Text1 from './../components/text-content/text.jsx';
import Image1 from './../components/image/image.jsx';
import { Link } from 'react-router-dom';


/* FOR DROPDOWN SELECTOR... */
import SelectSearch from 'react-select-search';
import fuzzySearch from './fuzzySearch.js';
import './style.css';


// USE CLASSNAME, className
// does not exist in REACT and was giving an error in Console.
function TestFile() {
  /**
   * The options array should contain objects.
   * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
   */

// [ {
//     name: 'FIDM-Fashion Institute of Design & Merchandising-Los Angeles',
//     value: 114354
//   },
//   {
//     name: 'FIDM-Fashion Institute of Design & Merchandising-San Francisco',
//     value: 114390
//   },
//   {
//     name: 'FIDM-Fashion Institute of Design & Merchandising-Orange County',
//     value: 114415
//   }]

  let options = [ // name, ID
      {name: 'University of California, Berkeley', value: 1},
      {name: 'University of California, Davis', value: 2},
      {name: 'University of California, MEME1', value: 3},
      {name: 'University of California, MEME2', value: 4},
      {name: 'actualMEMESCHOOOL', value: 5},
  ];
// () => (
//     <SelectSearch
//         options={countries}
//         search
//         filterOptions={fuzzySearch}
//         emptyMessage={() => <div style={{ textAlign: 'center', fontSize: '0.8em' }}>Not found renderer</div>}
//         placeholder="Select your country"
//     />
// )
  return (
    <SelectSearch 
      options={options} 
      search 
      filterOptions={fuzzySearch} 
      emptyMessage="Not found" 
      placeholder="Choose your school"
      value
    />
  )

}
export default TestFile;

