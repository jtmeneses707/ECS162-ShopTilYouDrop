import React from 'react';
import './button.css';


function addBtn(props) {
  return (
    <div id="Add-cart" className="form-container">
        <button id="AddtoCartButton" className="addBtn button-green">{props.children}</button>
    </div>
  )
}


export default addBtn;