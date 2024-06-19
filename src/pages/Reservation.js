import React,{useState, useEffect} from 'react';
import Head from '../Head';
import Footer from '../Footer';
import BookingForm from '../BookingForm';
import BookingPolicy from '../BookingPolicy';
import '../reserve.css'

export default function Reservation() {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    // Initialize availableTimes state
    const generateTimeOptions = () => {
      const times = [];
      for (let hour = 9; hour <= 18; hour++) {
        const formattedHour = hour.toString().padStart(2, '0');
        times.push(`${formattedHour}:00`);
      }
      return times;
    };

    setAvailableTimes(generateTimeOptions());
  }, []);
  return (
    <div className='reserve-box'>
      <section><Head/></section>
      <section className='book'>
        <h3 className='markazi book-heading'>Little Lemon restaurant, Chicago</h3>
        <div className='booking'>
        <main className='policy a-book'><BookingPolicy/></main>
        <main className='form a-book'><BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
          </main>
        </div>
     </section>
      <section><Footer/></section>
    </div>
  );
};