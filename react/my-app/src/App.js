import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackData from "./data/FeedbackData";
import Feedbackstats from './components/Feedbackstats';
import FeedbackForm from './components/FeedbackForm';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {

  return (
    <FeedbackProvider>
      <Header/>
      <div className='container'>
        <FeedbackForm/>
        <Feedbackstats/>
        <FeedbackList/>
      </div>
    </FeedbackProvider>
  )
}

export default App;
