import React from "react";
import greekSalad from './assets/greek-salad.jpg'
import bruscheta from './assets/Bruscheta.jpg'
import grilledTuna from './assets/Grilled-tuna.jpg'
import bikeSvg from './assets/delivery.svg'
import './styles.css';

export default function Highlights(){
    const imageStyle = {
        width: '300px',
        height: '150px',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px'
    }
    const iconStyle ={
        width: '16px',
        height:'16px'
    }
    return (
        <section className='highlights'>
            <header className="high-header">
            <h2 className='markazi'>This week's specials!</h2>
            <button aria-label='Click to have access to our ravishing selection of meal choices' className='menu-btn karla'>Online menu</button>
            </header>
            <main className='card-box'>
                {/* greek salad card */}
             <div className='greek-salad card'>
                <figure>
                <img loading="lazy" style={imageStyle} src={greekSalad} alt='a tasty greek salad'/>
                <div className='pricing'>
                    <figcaption className='meal-name'>Greek Salad</figcaption>
                    <figcaption className='meal-price'>$12.99</figcaption>
                </div>
                </figure>
                <p>We are a family owned 
Mediterranean restaurant, focused on traditional recipes served with a 
modern twist.
            </p>
             <div className='order-card'>
            <span>Order a delivery</span> 
            <img src={bikeSvg} style={iconStyle} alt="delivery icon"/>
            </div>
             </div>
             {/* bruscheta card */}
             <div className='bruscheta card'>
             <figure>
                <img loading="lazy" style={imageStyle} src={bruscheta} alt='an amazing bruscheta dish'/>
                <div className='pricing'>
                    <figcaption className='meal-name'>Bruscheta</figcaption>
                    <figcaption className='meal-price'>$8.99</figcaption>
                </div >
                </figure>
                <p>We are a family owned 
Mediterranean restaurant, focused on traditional recipes served with a 
modern twist.
            </p>
             <div className='order-card'>
            <span>Order a delivery</span> 
            <img src={bikeSvg} style={iconStyle} alt="delivery icon"/>
            </div>
             </div>
             {/* grilled tuna card */}
             <div className='grilled-tuna card'>
             <figure>
                <img loading="lazy" style={imageStyle} src={grilledTuna} alt='sumptious grilled tuna'/>
                <div className='pricing'>
                    <figcaption className='meal-name'>Grilled tuna</figcaption>
                    <figcaption className='meal-price'>$11.99</figcaption>
                </div >
                </figure>
                <p>We are a family owned 
Mediterranean restaurant, focused on traditional recipes served with a 
modern twist.
            </p>
             <div className='order-card'>
            <span>Order a delivery</span> 
            <img src={bikeSvg} style={iconStyle} alt="delivery icon"/>
            </div>
             </div>
            </main>
        </section>
    )
}