import React from 'react';
import './button.css';


function addBtn(props) {
  return (
    <div id="Add-cart" className="form-container">
        <button onClick={() => {
          // console.log(props.schoolName)
        }} className="addBtn button-red">{props.children}</button>
    </div>
  )
}


export default addBtn;