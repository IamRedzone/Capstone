import React from "react";
import heroImg from './assets/hero-img.jpg'
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function Hero(){
    const navigate = useNavigate();

    const imageStyle = {
        height: '362px',
        width: '331px',
        borderRadius: '16px'
    }

    const handleNavigate = () => {
        navigate('/Reservation.js');
      };

    return (
<section className='hero-box' style={{backgroundColor:'#495E57'}}>
    <main style={{paddingTop:'3%'}}>
    <div className='intro'>
        <article className='intro-text'>
            <h1 className="lemonh1-hero markazi" style={{color:'hsla(50,91,52,1.0)'}}>Little Lemon</h1>
            <h3 className="lemonh2-hero karla">Chicago</h3>
            <br/>
            <p className='lemonp-hero karla'>We are a family owned 
Mediterranean restaurant, focused on traditional recipes served with a 
modern twist.</p>
        </article>
        <button onClick={handleNavigate} className='reserve-btn karla'>Reserve a table</button>
    </div>
    <figure className='hero-figure'>
    <img className='reset-button hero-img ' src={heroImg} style={imageStyle} alt='barbeque rolls'/>
    </figure>
    </main>
</section>
    )
}