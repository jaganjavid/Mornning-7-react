import React from 'react'
import Feedbackitem from './Feedbackitem'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {

  const { feedback } = useContext(FeedbackContext);

  if(feedback.length === 0){
    return <h4 style={{textAlign:"center", marginTop:"20px"}}>There is no item</h4>
  }

  return (
    <div className='feedback-list'>
       {feedback.map((item) => (
        <Feedbackitem key={item.id} item={item}> {item.rating}</Feedbackitem>
       ))}
    </div>
  )
}

export default FeedbackList