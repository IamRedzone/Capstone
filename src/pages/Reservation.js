import React from 'react';
import Head from '../Head';
import Footer from '../Footer';
import BookingForm from '../BookingForm';
import BookingPolicy from '../BookingPolicy';
import '../reserve.css'

export default function Reservation() {
  return (
    <div className='reserve-box'>
      <section><Head/></section>
      <section className='book'>
        <h3 className='markazi book-heading'>Little Lemon restaurant, Chicago</h3>
        <div className='booking'>
        <main className='policy a-book'><BookingPolicy/></main>
        <main className='form a-book'><BookingForm/>
          </main>
        </div>
     </section>
      <section><Footer/></section>
    </div>
  );
};