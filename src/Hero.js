import React from "react";
import heroImg from './assets/hero-img.jpg'
import './styles.css';

export default function Hero(){
    const imageStyle = {
        height: '362px',
        width: '331px'
    }
    return (
<section>
    <div className='intro'>
        <article className='intro-text'>
            <h1 className="lemonh1-hero">Little Lemon</h1>
            <h2 className="lemonh2-hero">Chicago</h2>
            <br/>
            <p className='lemonp-hero'>We are a family owned 
Mediterranean restaurant, focused on traditional recipes served with a 
modern twist.</p>
        </article>
        <button className='reserve-btn'>Reserve a table</button>
    </div>
    <figure className='hero-figure'>
    <img src={heroImg} style={imageStyle} alt='barbeque rolls'/>
    </figure>
</section>
    )
}