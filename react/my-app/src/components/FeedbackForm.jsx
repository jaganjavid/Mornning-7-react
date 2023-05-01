import React, { useState, useContext, useEffect} from 'react'
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {

  const { addFeedback, feedbackEdit,updateFeedBack} = useContext(FeedbackContext);

  const [text, setText] = useState("");  
  const [rating, setRating] = useState(3);
  const [btnDisabled, setBtnDisabled] = useState(true);  
  const [message, setMessage] = useState("");  


  const handleTextChange = (e) => {
    if(text === ""){
        setBtnDisabled(true)
        setMessage(null)
    }else if(text !== "" && text.trim().length <= 10){
      setMessage("Text must be at least 10 characters")
      setBtnDisabled(true);
    } else {
        setBtnDisabled(false);
        setMessage(null);
    }
    setText(e.target.value);
  } 

  const handleSubmit= (e) => {
    e.preventDefault();
    if(text.trim().length > 10){
      const newFeedback = {
        text, 
        rating
      }

      if(feedbackEdit.edit === true){
        updateFeedBack(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback);
      }
      
    }
    setText("");
    setBtnDisabled(true);
    feedbackEdit.edit = false;
  }

  useEffect(() => {
    if(feedbackEdit.edit === true){
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])
  
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>

        <RatingSelect select={(rating) => setRating(rating)}/>

        <div className='input-group'>
          <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
          <Button type='submit' isDisabled={btnDisabled}>
            {feedbackEdit.edit === true ? "update" : "send"}
          </Button>
        </div>

        {message && <div className='message'>
          {message}    
        </div>}
      </form>
    </Card>
  )
}

export default FeedbackForm