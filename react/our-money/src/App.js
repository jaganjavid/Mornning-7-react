import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Spinner from './components//Spinner';

// Import Pages
import Home from "./pages/Home";
import Register from './pages/Register';
import Login from './pages/Login';
 
import { useSelector } from 'react-redux';

function App() {
  
  const { loading } = useSelector(state => state.alerts);

  return(
   <>
   {
    loading && (
      <div className='spinner'>
        <Spinner/>
      </div>
    )
   }
    <Header/>

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
