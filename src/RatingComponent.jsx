import React, { useState } from "react";
// React Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// Stars
const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const RatingComponent = () => {
  const [currentRating, setCurrentRating] = useState(0);
  const [rated,setRated] = useState(false);

  const renderedStars = stars.map(({ id }) => {
    if (id <= currentRating && currentRating !== 0) {
      return <AiFillStar key={id} onClick={() => setCurrentRating(id)} />;
    } else {
      return <AiOutlineStar key={id} onClick={() => setCurrentRating(id)} />;
    }
  });

  const handleSubmit = () =>{
    setRated(!rated)
  }

  if(rated){
  return (
    <main className='rating-component-container'>
      <div className='image-container'>
        <img src="https://res.cloudinary.com/birthdayreminder/image/upload/v1670175690/Transaction__Flatline_uw8jjy.png" alt="Transaction" width="150px" height="150px" />
        <p>You selected {currentRating} out of 5</p>
      </div>
      <section className='text-content'>
        <h2 style={{alignSelf:"center"}}>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating, If you ever need more support, don't hesitate to get in touch!
        </p>
      </section>
      <button type='button' onClick={()=> handleSubmit()}>BACK</button>
    </main>
  );
  }

  return (
    <main className='rating-component-container'>
      <div className='star-container'>
        <AiFillStar />
      </div>
      <section className='text-content'>
        <h2>How did we do?</h2>
        <p>
          Please let us know how did with your support request. All feedback is
          appreciated to help us improve our offering!
        </p>
      </section>
      <section className='stars-container'>{renderedStars}</section>
      <button type='button' onClick={()=> handleSubmit()}>SUBMIT</button>
    </main>
  );
};


export default RatingComponent;
