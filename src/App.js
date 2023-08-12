import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Page404 from './components/Page404';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<Navigate to="/" />}/>
      </Routes>
    </div>
  );
}

export default App;
