
import React, { useRef, useEffect } from 'react';
import MyD3Component from "./MyD3Component.jsx";
import Layout from './layout/layout.jsx';

import './App.css';


// API key for accessing data from gov College Data.
const apiKey = "1Mv8QnLNFFMrQkMkN6AKDFYPACgTWR8CoXpzWpiS";

// API call for getting first 99 schools awarding degres in call
const apiCall = `https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=${apiKey}&school.state=CA&school.degrees_awarded.predominant=3&fields=school.name&per_page=99`;

/* App */
function App() {
  return <Layout/>
}


/*original code

  <div>
          <p>A bar chart! </p>
        
          <div  className="barChart">
            <MyD3Component data={[1,5,6,3]}/>
        </div>

 */


export default App;