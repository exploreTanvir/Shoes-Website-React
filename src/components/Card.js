import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';
const Card = ({img,title,star,reviews,prevPrice,newPrice}) => {
  return (
    <div className="card">
        <img src={img} alt="shoe" className='cardImg'/>
        <div className="cardDetails">
          <h3 className="cardTitle">{title}</h3>
          <div className="cardReviews">
          {star}{star}{star}{star}
          <span className='totalReviews'>{reviews}</span>
          </div>
          <div className="cardPrice">
            <div className='price'>
              <del>{prevPrice}</del>{newPrice}
            </div>
            <div className='bag'>
              <BsFillBagHeartFill className='reactBag'/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card