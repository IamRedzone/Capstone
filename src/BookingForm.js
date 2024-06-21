import React, { useState, useEffect } from 'react';
import './reserve.css';


const BookingForm = ({availableTimes, dispatch}) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add your form submission logic here (e.g., send data to a server)
  };

  useEffect(() => {
    console.log('Current form data:', formData);
  }, [formData]);

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h1 className='karla' style={{textAlign:'center', color:'hsla(29,89%,86%,1.0)'}}>Book Now</h1>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input 
          type="date" 
          id="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
          required 
           aria-required="true"
          aria-label="Select date for reservation"
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <select
          id="time"
          name="time"
          className="time-input"
          value={formData.time}
          onChange={handleChange}
          required
           aria-required="true"
          aria-label="Select time for reservation"
        >
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="guests">Number of guests:</label>
        <input 
          type="number" 
          id="guests" 
          name="guests" 
          value={formData.guests} 
          onChange={handleChange} 
          min="1" 
          max="10" 
          required 
          aria-required="true"
          aria-label="Enter number of guests"
        />
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Occasion:</label>
        <select 
          id="occasion" 
          name="occasion" 
          value={formData.occasion} 
          onChange={handleChange} 
          aria-required="true"
          aria-label="Select occasion for reservation"
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value='Date'>Date</option>
          <option value='Engagement'>Engagement</option>
        </select>
      </div>
      <button type="submit">Submit reservation</button>
    </form>
  );
};

export default BookingForm;