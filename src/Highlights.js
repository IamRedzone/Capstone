import React from "react";
import greekSalad from './assets/greek-salad.jpg'
import bruscheta from './assets/Bruscheta.jpg'
import grilledTuna from './assets/Grilled-tuna.jpg'
import bikeSvg from './assets/delivery.svg'
import './styles.css';

export default function Highlights(){
    const imageStyle = {
        width: '300px',
        height: '100px'
    }
    const iconStyle ={
        width: '16px',
        height:'16px'
    }
    return (
        <section>
            <heading>
            <h2>This week's specials!</h2>
            <button>Online menu</button>
            </heading>
            <main>
                {/* greek salad card */}
             <div className='greek-salad card'>
                <figure>
                <img style={imageStyle} src={greekSalad} alt='a tasty greek salad'/>
                <div>
                    <figcaption>Greek Salad</figcaption>
                    <figcaption>$12.99</figcaption>\
                </div>
                </figure>
                <p>We are a family owned 
Mediterranean restaurant, focused on traditional recipes served with a 
modern twist.
            </p>
             <div>
            <span>Order a delivery</span> 
            <img src={bikeSvg} style={iconStyle} alt="delivery icon"/>
            </div>
             </div>
             {/* bruscheta card */}
             <div className='bruscheta card'>
             <figure>
                <img style={imageStyle} src={bruscheta} alt='an amazing bruscheta dish'/>
                <div>
                    <figcaption>Bruscheta</figcaption>
                    <figcaption>$8.99</figcaption>\
                </div>
                </figure>
                <p>We are a family owned 
Mediterranean restaurant, focused on traditional recipes served with a 
modern twist.
            </p>
             <div>
            <span>Order a delivery</span> 
            <img src={bikeSvg} style={iconStyle} alt="delivery icon"/>
            </div>
             </div>
             {/* grilled tuna card */}
             <div className='grilled-tuna card'>
             <figure>
                <img style={imageStyle} src={grilledTuna} alt='sumptious grilled tuna'/>
                <div>
                    <figcaption>Bruscheta</figcaption>
                    <figcaption>$8.99</figcaption>\
                </div>
                </figure>
                <p>We are a family owned 
Mediterranean restaurant, focused on traditional recipes served with a 
modern twist.
            </p>
             <div>
            <span>Order a delivery</span> 
            <img src={bikeSvg} style={iconStyle} alt="delivery icon"/>
            </div>
             </div>
            </main>
        </section>
    )
}