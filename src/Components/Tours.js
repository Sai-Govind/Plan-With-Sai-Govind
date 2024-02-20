import React from 'react';
import Card from './Card';
import '../Styles/Tour.css';
import NoTours  from './NoTours';
const Tours = ({tours,removeTour}) => {
  return (
    <div className='tour'>
    
     {tours.length>0 && tours.map((tour,id)=>(
      <Card key={id} obj={tour} removeTour={removeTour} ></Card>
     ))
    }
    {tours.length==0 && <NoTours/>}
    </div>
  );
}

export default Tours;
