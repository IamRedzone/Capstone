import React from "react";
import indoor from './assets/indoor-LLRestaurant.jpg'
import outdoor from './assets/Outdoor.jpg'
import './styles.css'

export default function About(){
    const imageStyle = {
        width: '300px',
        height: '100px'
    }
    return(
     <section>
        <article className='About-us'>
            <h1 className="lemonh1-about">Little Lemon</h1>
            <h2 className="lemonh2-about">Chicago</h2>
            <br/>
            <p className='lemonp-about'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with modern twist.We are a family owned mediterranean restaurant, focused on traditional recipes served with a.
modern twist.We are a family owned 
Mediterranean restaurant, focused on traditional recipes served with a modern twist.We are a family owned Mediterranean restaurant, focused on traditional recipes served with a 
modern twist.</p>
        </article>
    <figure className='hero-figure'>
    <img style={imageStyle} src={indoor} alt='indoor Little Lemon'/>
    <img style={imageStyle} src={outdoor} alt='outdoor Little Lemon'/>
    </figure>
     </section>
    )
}