import Head from './Head';
import Main from './Main'
import Footer from './Footer'
import Left from './Left';
import Right from './Right';
import './App.css';
import './styles.css';

function App() {
  return (
    <div className='container'>
    <Head/>
    <Left/>
    <Main/>
    <Right/>
    <Footer/>
  </div>
  );
}

export default App;
