import React, { useState } from 'react'
import Card from './shared/Card';
import { FaTimes } from "react-icons/fa";

const Feedbackitem = ({item,handleClick}) => {
  return (
    <Card>
       <div className='num-display'>{item.rating}</div>
       <button onClick={() => handleClick(item.id)} className='close'>
        <FaTimes color='purple'/>
       </button>
       <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default Feedbackitem