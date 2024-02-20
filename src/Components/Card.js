import React, { useState } from 'react';
import '../Styles/Card.css';

const Card = ({ obj, removeTour }) => {
  const flag = obj.info.length > 200 ? false : true;
  const [showMore, setShowMore] = useState(" ...read more");

  const toggleKnowMore = () => {

    setShowMore(showMore===" ...read more" ? "read less" : " ...read more");
  };

  return (
    <div className='card'>
      <img src={obj.image} width={380} height={380} alt={obj.name} />
      <p className='tourprice'>{obj.price}</p>
      <p className='tourheading'>{obj.name}</p>
      <p>
        {obj.info.substring(0, 200) }
        {showMore==="read less"?obj.info.substring(200):""}
        {!flag && <button className='btn' onClick={toggleKnowMore}>{showMore}</button>}
      </p>
      <div className='not'>
      <button className='notintre'  onClick={()=>{removeTour(obj.id)}}>Not Interested</button>
      </div>
     
    </div>
  );
};

export default Card;
