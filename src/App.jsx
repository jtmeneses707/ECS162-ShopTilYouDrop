
import React, { useRef, useEffect } from 'react';
import MyD3Component from "./MyD3Component.jsx";
import Layout from './layout/layout.jsx';
import useAsyncFetch from './useAsyncFetch'; // a custom hook

import './App.css';


/* App */
function App() {
  return (
    <div className = "super-container">
    <Layout/>
    </div>
  )
}



export default App;