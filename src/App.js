import Home from './pages/Home';
import './App.css';
import './styles.css';
import React from 'react';
import { ScrollProvider } from './Scrollcontext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Reservation from './pages/Reservation';

function App() {
  return (
    <ScrollProvider>
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Home/>} exact/>
    <Route path='/Reservation.js' element={<Reservation/>}/>
    </Routes>
    </Router>
  </>

  </ScrollProvider>
  );
}

export default App;
