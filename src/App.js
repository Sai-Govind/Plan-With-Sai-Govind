import React, { useState } from "react";
import data from './data.js';
import Tours from './Components/Tours.js';
import './Styles/App.css';
const App = () => {
  const [tours,setTours]=useState(data);
  const removeTour=(id)=>{
    const newtour=tours.filter(tour=>(
      tour.id!=id
    ))
    // newtour.splice(id,1);
    setTours(newtour);
  }
  return(
    <div className="app">
       {tours.length>0 &&  <h1 className="head">Plan With Sai</h1>}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
