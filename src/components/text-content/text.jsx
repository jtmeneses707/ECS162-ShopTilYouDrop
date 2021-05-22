import React from 'react';
import './text.css';


function addText(props) {
  return (
    <div className="text1-container">
           <p>{props.children} </p>
    </div>
  )
}

export default addText;

