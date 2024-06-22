import React,{useContext} from 'react';
import footerLogo from './assets/Asset18_4x.svg';
import { ScrollContext } from './Scrollcontext';
import { Link } from 'react-router-dom';
import './styles.css'
import BasicForm from './BasicForm';

export default function Footer() {
  const { sectionRefs } = useContext(ScrollContext);
  const imageStyle = {
    width: '300px',
    height: '100px'
}
const { scrollToSection } = useContext(ScrollContext);

    return (
        <footer ref={sectionRefs.section4} className='footer' style={{display:'flex', flexDirection:'row', color:'white', padding:'50px'}}>
          <div className='foot-container'>
          <section style={{display:'flex', flexDirection:'column', flex:'1'}}>
            <img src={footerLogo} style={imageStyle} alt="a logo of Little Lemon"/>
            <h2 className='markazi'>Little Lemon restaurant, Chicago</h2>
            <p className='karla' style={{width:'200px'}}>We are a family owned 
Mediterranean restaurant, focused on traditional recipes served with a 
modern twist.</p>
            </section>
          <section style={{display:'flex', flexDirection:'row', justifyContent:'space-between', flex:'2'}}>
            <main><ul className="foot-bar" style={{display:'flex', flexDirection:'column', listStyle:'none', textAlign:'left'}}>
    <li><button className="reset-button" onClick={() => scrollToSection('section1')}><Link to='/'>HOME</Link></button></li>
    <li><button className="reset-button" onClick={() => scrollToSection('section2')}>ABOUT</button></li>
    <li><button className="reset-button" onClick={() => scrollToSection('section3')}>MENU</button></li>
    <li><button className="reset-button" onClick={() => scrollToSection('section1')}><Link to='/Reservation.js'>RESERVATIONS</Link></button></li>
    <li><button className="reset-button" onClick={() => scrollToSection('section3')}>ORDER ONLINE</button></li>
    <li><button className="reset-button" onClick={() => scrollToSection('section4')}>SIGN UP</button></li>
</ul></main>
            <aside>
              <BasicForm/>
            </aside>
          </section>
          </div>
        </footer>
    )
}