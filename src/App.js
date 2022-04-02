
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import MyChart from './Components/MyChart/MyChart';
import Navber from './Components/Navber/Navber';
import NotFount from './Components/NotFount/NotFount';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    
     <>
      <div className='App'>
         <Navber></Navber>
        <Routes>
         
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/mychart' element={<MyChart></MyChart>}></Route> */}
        <Route path='/*' element={<NotFount></NotFount>}></Route>
      </Routes>

      </div>
     </>
    
  );
}

export default App;
