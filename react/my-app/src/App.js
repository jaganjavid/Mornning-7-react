import './App.css';
import Header from './components/Header';
import Feedbackitem from './components/Feedbackitem';
// import { useState } from 'react';

function App() {

  // let name = "Jagan";

  // const [name, setName] = useState("Jagan");

  // const handleClick = () => {
  //   setName("Javid")
  // }

  // console.log(name);

  

  return (
    <div>
      <Header/>
      <div className='container'>
        <Feedbackitem/>
      </div>
      {/* <h2>{name}</h2>
      <button onClick={handleClick}>Click ME</button> */}
    </div>
  )
}

export default App;
