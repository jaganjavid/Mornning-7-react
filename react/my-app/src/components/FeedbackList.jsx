import React from 'react'
import Feedbackitem from './Feedbackitem'

const FeedbackList = ({feedback, handleClick}) => {

  return (
    <div className='feedback-list'>
       {feedback.map((item) => (
        <Feedbackitem key={item.id} item={item} handleClick={handleClick}> {item.rating}</Feedbackitem>
       ))}
    </div>
  )
}

export default FeedbackList