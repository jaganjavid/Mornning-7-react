import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';



import Header from './components/Header';
import Spinner from './components//Spinner';

// Import Pages
import Home from "./pages/Home";
import Register from './pages/Register';
import Login from './pages/Login';
 
import { useSelector } from 'react-redux';

import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';

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
            <Route path='/' element={ <ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
            <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
        </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
