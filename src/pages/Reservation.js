import React,{useReducer} from 'react';
import Head from '../Head';
import Footer from '../Footer';
import BookingForm from '../BookingForm';
import BookingPolicy from '../BookingPolicy';
import '../reserve.css'

const initializeTimes = () => {
  const times = [];
  for (let hour = 9; hour <= 18; hour++) {
    const formattedHour = hour.toString().padStart(2, '0');
    times.push(`${formattedHour}:00`);
  }
  return times;
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, just returning the same times regardless of the date
      return initializeTimes();
    default:
      return state;
  }
};

export default function Reservation() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className='reserve-box'>
      <section><Head/></section>
      <section className='book'>
        <h3 className='markazi book-heading'>Little Lemon restaurant, Chicago</h3>
        <div className='booking'>
        <main className='policy a-book'><BookingPolicy/></main>
        <main className='form a-book'><BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
          </main>
        </div>
     </section>
      <section><Footer/></section>
    </div>
  );
};