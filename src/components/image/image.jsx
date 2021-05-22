import React from 'react';
import './image.css';


function addImage(props) {
  return (
     <div className="imgWrap">
          <img id="image_display" src= {props.children}/>
      </div>
  )
}

export default addImage;

