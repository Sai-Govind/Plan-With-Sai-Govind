import React from 'react';
import '../Styles/NoTours.css';
const NoTours = () => {
  return (
    <div className='notour'>
      <h3>No Tours Left</h3>
      <button className='btn1' onClick={()=>{
        window.location.reload();
      }}> Refresh</button>
    </div>
  );
}

export default NoTours;
