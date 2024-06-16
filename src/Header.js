import React from 'react';
import LLlogo from './assets/Little-lemon-logo.jpg';

export default function Header() {
    const imageStyle = {
        width: '200px',
        height: '70px'
    }
    return (
        <header className='heading'>
    <img src={LLlogo} style={imageStyle} alt="a logo of Little Lemon"/>
    </header>
    )
}