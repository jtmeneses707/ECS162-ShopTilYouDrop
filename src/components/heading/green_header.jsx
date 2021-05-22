import React from 'react';
import './shop-header.css';


function addHeader(props) {
  return (
    <div className="header-container header-green">
        <p>{props.children} </p>
      </div>
  )
}


export default addHeader;