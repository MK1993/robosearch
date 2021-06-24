import React from 'react';
function Scroll(props) {
    return (
      <div style={{border: "1px solid black",height:"800px",overflowY: 'scroll'}}>{props.children}</div>
    );
}
  
export default Scroll;