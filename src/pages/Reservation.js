import React,{useReducer, useEffect, useState} from 'react';
import Head from '../Head';
import Footer from '../Footer';
import BookingForm from '../BookingForm';
import BookingPolicy from '../BookingPolicy';
import ConfirmedBookings from '../ConfirmedBookings';
import '../reserve.css'

const seededRandom = function(seed) {
  const m = 2**35 - 31;
  const a = 185852;
  let s = seed % m;
  return function() {
    return (s = s * a % m) / m;
  };
};
const generateRandomTimes = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 9; i <= 18; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() > 0.5) {
      result.push(`${i}:30`);
    }
  }
  return result;
};
const initializeTimes = () => {
  const today = new Date();
  return generateRandomTimes(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      return generateRandomTimes(action.payload);
    case 'INITIALIZE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

export default function Reservation() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({})

  useEffect(() => {
    const today = new Date();
    const initialTimes = generateRandomTimes(today);
    dispatch({ type: 'INITIALIZE_TIMES', payload: initialTimes });
  }, []);

  useEffect(() => {
    console.log('Available times updated:', availableTimes);
  }, [availableTimes]);

  const handleFormSubmit = (formData) => {
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData(formData)
  };

  return (
    <div className='reserve-box'>
      <section><Head/></section>
      <section className='book'>
        <h3 className='markazi book-heading'>Little Lemon restaurant, Chicago</h3>
        <div className='booking'>
        <main className='policy a-book'><BookingPolicy/></main>
        <main className='form a-book'>{isSubmitted ? (
        <ConfirmedBookings formData={formData} />
      ) : (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={handleFormSubmit} />
      )}
          </main>
        </div>
     </section>
      <section><Footer/></section>
    </div>
  );
};