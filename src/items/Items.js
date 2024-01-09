import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';
import "./items.css";

const Items = () => {
  return (
    <section className="cardContainer">
      <div className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" className='cardImg'/>
        <div className="cardDetails">
          <h3 className="cardTitle">Shoe</h3>
          <div className="cardReviews">
            <AiFillStar className='cardStars'/><AiFillStar className='cardStars'/><AiFillStar className='cardStars'/><AiFillStar className='cardStars'/>

            <span className='totalReviews'>5</span>
          </div>
          <div className="cardPrice">
            <div className='price'>
              <del>$300</del>200
            </div>
            <div className='bag'>
              <BsFillBagHeartFill className='reactBag'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Items