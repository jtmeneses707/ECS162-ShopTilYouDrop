
import React, { useRef, useEffect } from 'react';
import MyD3Component from "./MyD3Component.jsx";
import './App.css';

// API key for accessing data from College Board.
const apiKey = "1Mv8QnLNFFMrQkMkN6AKDFYPACgTWR8CoXpzWpiS";

/* App */
function App() {
    return (
      <div class="main-container">
        
       <div  class= "header-container">
        <p> SHOP 'TIL YOU DROP </p> 
         </div>

        <div class = "text1-container"> 
        <p> Tuition is the only the sticker price - you might be eligible for a big discount! Estimate the <i id = "special-text"> real </i> costs of college, for schools across the country. </p> 
        </div>


        <div class = "imgWrap"> 
         <img id="shoppingcart" src="./img/shoppingcart.png" />
         </div> 

        <div class="text2-container"> 
        <p > Start typing to pick a school </p>
        </div>

        <div> 
        <input type="text" class = "input-shop" />
        </div>

        <div id="Add-cart" class="form-container">
            <button id="AddtoCartButton" class="addBtn">ADD TO CART</button>
        </div>


        </div>
    )
}




/*original code

  <div>
          <p>A bar chart! </p>
        
          <div  className="barChart">
            <MyD3Component data={[1,5,6,3]}/>
        </div>

 */




export default App;