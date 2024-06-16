import React from 'react';
import footerLogo from './assets/Asset18_4x.svg';

export default function Footer() {
  const imageStyle = {
    width: '300px',
    height: '100px'
}
    return (
        <footer className='footer'>
          <img src={footerLogo} style={imageStyle} alt="a logo of Little Lemon"/>
        </footer>
    )
}