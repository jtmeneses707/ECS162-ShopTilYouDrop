import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';


// import './layout.css';

//test purpose, different state
import Shop1 from './shop1.jsx';
import Shop2 from './shop2.jsx';
import Shop3 from './shop3.jsx';
import Shop4 from './shop4.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import TestFile from './testFile.jsx';



function Layout() {
  const [schoolName, setSchoolName] = useState('');
  const [range, setRange] = useState(0);
  const saveSchoolHandler = (enteredSchool) => {
    setSchoolName(enteredSchool);
  };

  const saveRangeHandler = (enteredRange) => {
    setRange(enteredRange);
  };
  console.log("curr School (Parent):",schoolName);
  console.log("curr range (Parent):",range);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Shop1 onSaveSchool={saveSchoolHandler}/>
        </Route>
        <Route path="/shop1">
          <Shop1 onSaveSchool={saveSchoolHandler}/>
        </Route>
        <Route path="/shop2">
          <Shop2 selectedSchool={schoolName}/>
        </Route>
        <Route path="/shop3">
          <Shop3 onSaveRange={saveRangeHandler}/>
        </Route>
        <Route path="/shop4">
          <Shop4 selectedSchool={schoolName} selectedRange={range}/>
        </Route>
      </Switch>
    </Router>
    // <TestFile/>
  )
}
export default Layout;

