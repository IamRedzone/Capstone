import React from "react";
import karen from './assets/Karen.jpeg'
import annie from './assets/Annie.jpeg'
import drake from './assets/Drake.jpeg'
import peter from './assets/Peter.jpeg'
import './styles.css'

export default function Testimonials(){
    const faceStyle ={
        height:'100px', width:'100px', borderRadius:'50%'
    }
    return(
     <section className='testimonials'>
        <h2 className='markazi'>Testimonials</h2>
        <main className='boards'>
         <div className='board karen'>
            <h5>Ratings</h5>
            <figure>
                <img loading="lazy" className='board-img' src={karen} style={faceStyle} alt='our lovely customer'/>
                <figcaption>Karen</figcaption>
            </figure>
            <p>Tasty and good</p>
         </div>
         {/* for drake */}
         <div className='board drake'>
            <h5>Ratings</h5>
            <figure>
                <img loading="lazy" className='board-img' src={drake} style={faceStyle} alt='our lovely customer'/>
                <figcaption>Drake</figcaption>
            </figure>
            <p>Foodgasm!</p>
         </div>
         {/* for peter */}
         <div className='board peter'>
            <h5>Ratings</h5>
            <figure>
                <img loading="lazy" className='board-img' src={peter} style={faceStyle} alt='our lovely customer'/>
                <figcaption>Peter</figcaption>
            </figure>
            <p>Sumptious but healthy!</p>
         </div>
         {/* for Annie */}
         <div className='board annie'>
            <h5>Ratings</h5>
            <figure>
                <img loading="lazy" className='board-img' src={annie} style={faceStyle} alt='our lovely customer'/>
                <figcaption>Annie</figcaption>
            </figure>
            <p>Absolutely delectable!</p>
         </div>
        </main>
     </section>
    )
}