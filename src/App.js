import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Page404 from './components/Page404';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar';
import User from './components/User';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/user/:name' element={<User />}/>
        <Route path='*' element={<Navigate to="/" />}/>
      </Routes>
    </div>
  );
}

export default App;
