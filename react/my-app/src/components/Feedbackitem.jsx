import React, { useState } from 'react'

const Feedbackitem = () => {

  const [rating, setRating] = useState(0);
  const [text, setText]= useState("This is my example text");

  const handleClick = () => {
    setRating((prev) => {
        console.log(prev);
        return prev + 1
    })
    // setText("This is updated")
  }

  return (
    <div className='card'>
       <div className='num-display'>{rating}</div>
       <div className='text-display'>{text}</div>
       <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Feedbackitem