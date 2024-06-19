import React, { useState } from 'react';
import './reserve.css';


const BookingForm = () => {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add your form submission logic here (e.g., send data to a server)
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 9; hour <= 18; hour++) {
      const formattedHour = hour.toString().padStart(2, '0');
      times.push(`${formattedHour}:00`);
    }
    return times;
  };

  const availableTimes = generateTimeOptions();

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input 
          type="date" 
          id="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
          required 
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
        />
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Occasion:</label>
        <select 
          id="occasion" 
          name="occasion" 
          value={formData.occasion} 
          onChange={handleChange} 
          required
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