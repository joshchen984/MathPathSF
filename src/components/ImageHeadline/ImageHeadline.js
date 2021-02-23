import React from 'react';
const ImageHeadline = (props) => (
  <div style={{textAlign: "center"}}>
    <strong style={{fontSize: "1.2rem"}}>{props.children}</strong> <br/>
    <i>{props.sub}</i>
  </div>
);
export default ImageHeadline;
