import React, {useContext} from "react";
import './styles.css';
import { ScrollContext } from './Scrollcontext';

export default function Nav() {
    const { scrollToSection } = useContext(ScrollContext);
    return (
<nav className='nav'>
<ul className="navbar">
    <li><button className="reset-button" onClick={() => scrollToSection('section1')}>HOME</button></li>
    <li><button className="reset-button" onClick={() => scrollToSection('section2')}>ABOUT</button></li>
    <li><button className="reset-button" onClick={() => scrollToSection('section3')}>MENU</button></li>
    <li><button className="reset-button" onClick={() => scrollToSection('section1')}>RESERVATIONS</button></li>
    <li><button className="reset-button" onClick={() => scrollToSection('section3')}>ORDER ONLINE</button></li>
    <li><button className="reset-button" onClick={() => scrollToSection('section4')}>SIGN UP</button></li>
</ul>
</nav>
    )
}