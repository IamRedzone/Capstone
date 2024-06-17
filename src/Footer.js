import React,{useContext} from 'react';
import footerLogo from './assets/Asset18_4x.svg';
import { ScrollContext } from './Scrollcontext';
import './styles.css'

export default function Footer() {
  const { sectionRefs } = useContext(ScrollContext);
  const imageStyle = {
    width: '300px',
    height: '100px'
}

    return (
        <footer ref={sectionRefs.section4} className='footer'>
          <img src={footerLogo} style={imageStyle} alt="a logo of Little Lemon"/>
        </footer>
    )
}