import React from "react";
import './styles.css';

export default function Nav() {
    return (
<nav className='nav'>
<ul className="navbar">
    <li><a href="/home" role="button">HOME</a></li>
    <li><a href="/about" role="button">ABOUT</a></li>
    <li><a href="/menu" role="button">MENU</a></li>
    <li><a href="/reserve" role="button">RESERVATIONS</a></li>
    <li><a href="/order" role="button">ORDER ONLINE</a></li>
    <li><a href="/login" role="button">LOGIN</a></li>
</ul>
</nav>
    )
}