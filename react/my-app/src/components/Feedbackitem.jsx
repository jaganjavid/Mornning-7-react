import React, { useState } from 'react'
import Card from './shared/Card';
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const Feedbackitem = ({item}) => {
  const { deleteFeedback,updateFeedBack } = useContext(FeedbackContext);
  return (
    <Card>
       <div className='num-display'>{item.rating}</div>
       <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple'/>
       </button>
       <button onClick={() => updateFeedBack(item)} className='edit'>
        <FaEdit color='purple'/>
       </button>
       <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default Feedbackitem