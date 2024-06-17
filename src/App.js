import Head from './Head';
import Main from './Main'
import Footer from './Footer'
import Left from './Left';
import Right from './Right';
import './App.css';
import './styles.css';
import React from 'react';
import { ScrollProvider } from './Scrollcontext';

function App() {
  return (
    <ScrollProvider>
    <div className='container'>
    <Head/>
    <Left/>
    <Main/>
    <Right/>
    <Footer/>
  </div>
  </ScrollProvider>
  );
}

export default App;
