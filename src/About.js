import React from "react";
import indoor from './assets/indoor-LLRestaurant.jpg'
import outdoor from './assets/Outdoor.jpg'
import './styles.css'

export default function About(){
    const imageStyle = {
        width: '330px',
        height: '410px',
        borderRadius: '14px'
    }
    return(
     <section className='about'>
        <main>
        <article className='about-us'>
            <h1 className="lemonh1-about markazi">Little Lemon</h1>
            <h2 className="lemonh2-about karla">Chicago</h2>
            <br/>
            <p className='lemonp-about karla'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with modern twist.We are a family owned mediterranean restaurant, focused on traditional recipes. <br/> All served with a.
modern twist. 
We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.We are a family owned Mediterranean restaurant, focused on traditional recipes served with a 
modern twist.</p>
        </article>
    <figure className='about-figure'>
    <img className="indoor" style={imageStyle} src={indoor} alt='indoor Little Lemon'/>
    <img className="outdoor" style={imageStyle} src={outdoor} alt='outdoor Little Lemon'/>
    </figure>
    </main>
     </section>
    )
}