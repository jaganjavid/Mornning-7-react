import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackData from "./data/FeedbackData";
import Feedbackstats from './components/Feedbackstats';
import FeedbackForm from './components/FeedbackForm';

function App() {

  const [feedback, setFeedback] = useState(FeedbackData);
  
  const handleClick = (id) => {
    if(window.confirm("Are you sure")){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <div>
      <Header/>
      <div className='container'>
        <FeedbackForm/>
        <Feedbackstats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default App;
