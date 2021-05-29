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
import PropTypes from 'prop-types';
import fuzzySearch from './fuzzySearch.js';
import './style.css';


// USE CLASSNAME, class does not exist in REACT and was giving an error in Console. 
function Shop1(props) {
  /**
   * The options array should contain objects.
   * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
   */
  const onChangeHandler = (event) => { // when they confirm a selection from dropdown...save it here! (state is in parent)
    props.onSaveSchool(event)
    setSchoolNameLocal(event)
  };

  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState([]); // name, ID useAsynchFetch will set it first... 
  const [schoolNameLocal, setSchoolNameLocal] = useState(""); // name, ID useAsynchFetch will set it first... 

  // Using hardcoded list of schools (much faster & less error-prone!)
  const hardCodedSchools = [
    'Academy of Art University',
    'Art Center College of Design',
    'Berkeley City College',
    'Biola University',
    'Boston University',
    'Brown University',
    'Butte College',
    'California Baptist University',
    'California Christian College',
    'California College of the Arts',
    'California Institute of Technology',
    'California Institute of the Arts',
    'California Lutheran University',
    'California State University Channel Islands',
    'California State University Maritime Academy',
    'California State University-Bakersfield',
    'California State University-Chico',
    'California State University-Dominguez Hills',
    'California State University-East Bay',
    'California State University-Fresno',
    'California State University-Fullerton',
    'California State University-Long Beach',
    'California State University-Los Angeles',
    'California State University-Northridge',
    'California State University-Sacramento',
    'California State University-San Bernardino',
    'California State University-Stanislaus',
    'Chapman University',
    'City College of San Francisco',
    'Claremont McKenna College',
    'Columbia College Hollywood',
    'Columbia University',
    'Concordia University-Irvine',
    'Cypress College',
    'De Anza College',
    'Design Institute of San Diego',
    'Dominican University of California',
    'Drexel University',
    'Emory University',
    'Fresno Pacific University',
    'Georgetown University',
    'Harvard University',
    'Harvey Mudd College',
    'Holy Names University',
    'Hope International University',
    'Laguna College of Art and Design',
    'Life Pacific University',
    'Los Medanos College',
    'Loyola Marymount University',
    'Massachusetts Institute of Technology',
    'Menlo College',
    'Mills College',
    "Mount Saint Mary's University",
    'National University',
    'Notre Dame de Namur University',
    'Occidental College',
    'Otis College of Art and Design',
    'Pacific Union College',
    'Pepperdine University',
    'Pitzer College',
    'Platt College',
    'Point Loma Nazarene University',
    'Princeton University',
    'Providence Christian College',
    'Rice University',
    "Saint Mary's College of California",
    'San Diego Christian College',
    'San Diego State University',
    'San Francisco Art Institute',
    'San Francisco Conservatory of Music',
    'San Francisco State University',
    'San Jose State University',
    'Santa Clara University',
    'Scripps College',
    'Simpson University',
    'Soka University of America',
    'Sonoma State University',
    'Stanford University',
    'Thomas Aquinas College',
    'Tulane University',
    'University of California-Berkeley',
    'University of California-Davis',
    'University of California-Irvine',
    'University of California-Los Angeles',
    'University of California-Riverside',
    'University of California-San Diego',
    'University of California-Santa Barbara',
    'University of California-Santa Cruz',
    'University of La Verne',
    'University of Maryland',
    'University of Pennsylvania',
    'University of Redlands',
    'University of Southern California',
    'Vanguard University of Southern California',
    'West Coast University-Los Angeles',
    'Westmont College',
    'Whittier College',
    'William Jessup University',
    'Woodbury University',
    'Yale University',
    'John F. Kennedy University'
  ];

  function initalizeList() {
    let tempOptions = [];
    for (let i = 0; i < hardCodedSchools.length; i++) { // for each 99 schools...
      // create options obj and add to options...
      let optionObj = { name: hardCodedSchools[i], value: hardCodedSchools[i] };
      tempOptions.push(optionObj);
    }
    setOptions(tempOptions)
    setLoading(false); // done fetching data...display search bar
  }

  useEffect(function() { // only gets run when the component first created...
    console.log("Calling initalizeList");
    initalizeList();
  }, []);

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
      {
        loading ? <p>Fetching list of schools...</p> :
          <div className="input-container">
            <SelectSearch
              options={options}
              search
              filterOptions={fuzzySearch}
              emptyMessage="Not found"
              placeholder="Select your school..."
              onChange={onChangeHandler}
            />
          </div>
      }

      {
        schoolNameLocal == "" ?
          <Link to="/shop1" style={{ textDecoration: 'none' }}>
            <OrangeBtn>ADD TO CART</OrangeBtn>
          </Link>
          :
          <Link to="/shop2" style={{ textDecoration: 'none' }}>
            <OrangeBtn>ADD TO CART</OrangeBtn>
          </Link>
      }
    </div>
  )
}

export default Shop1;

