import React from "react";
import karen from './assets/Karen.jpeg'
import annie from './assets/Annie.jpeg'
import drake from './assets/Drake.jpeg'
import peter from './assets/Drake.jpeg'
import './styles.css'

export default function Testimonials(){
    return(
     <section>
        <h2>Specials</h2>
        <main className='boards'>
         <div className='board karen'>
            <h5>Ratings</h5>
            <figure>
                <img src={karen} style={{height:'60px', width:'60px', borderRadius:'50%'}} alt='our lovely customer'/>
                <figcaption>Karen</figcaption>
            </figure>
            <p>Tasty and good</p>
         </div>
         {/* for drake */}
         <div className='board drake'>
            <h5>Ratings</h5>
            <figure>
                <img src={drake} style={{height:'60px', width:'60px', borderRadius:'50%'}} alt='our lovely customer'/>
                <figcaption>Drake</figcaption>
            </figure>
            <p>Foodgasm!</p>
         </div>
         {/* for peter */}
         <div className='board peter'>
            <h5>Ratings</h5>
            <figure>
                <img src={peter} style={{height:'60px', width:'60px', borderRadius:'50%'}} alt='our lovely customer'/>
                <figcaption>Peter</figcaption>
            </figure>
            <p>Sumptious but healthy!</p>
         </div>
         {/* for Annie */}
         <div className='board annie'>
            <h5>Ratings</h5>
            <figure>
                <img src={annie} style={{height:'60px', width:'60px', borderRadius:'50%'}} alt='our lovely customer'/>
                <figcaption>Annie</figcaption>
            </figure>
            <p>Absolutely delectable!</p>
         </div>
        </main>
     </section>
    )
}