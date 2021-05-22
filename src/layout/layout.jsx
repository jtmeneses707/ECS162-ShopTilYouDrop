import React, { Component, Fragment } from 'react';
import { useState, useEffect } from 'react';

import './layout.css';

//test purpose, different state
import Shop1 from './shop1.jsx';
import Shop3 from './shop3.jsx';



// USE CLASSNAME, class does not exist in REACT and was giving an error in Console. 
function Layout() {
  return (
  <Shop3/>
  )
}
export default Layout;

