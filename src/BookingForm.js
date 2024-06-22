import React, { useState, useEffect } from 'react';
import './reserve.css';


const BookingForm = ({availableTimes, dispatch, onSubmit}) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });
  const [errors, setErrors] = useState({});

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

  const validate = () => {
    let tempErrors = {};
    tempErrors.date = formData.date ? "" : "Date is required";
    tempErrors.time = formData.time ? "" : "Time is required";
    tempErrors.guests = formData.guests ? "" : "Number of guests is required";
    if (formData.guests) {
      tempErrors.guests = formData.guests < 1 || formData.guests > 10 ? "Number of guests must be between 1 and 10" : "";
    }
    tempErrors.occasion = formData.occasion ? "" : "Occasion is required";

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
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
        {errors.date && <div className="error">{errors.date}</div>}
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
        {errors.time && <div className="error">{errors.time}</div>}
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
        {errors.guests && <div className="error">{errors.guests}</div>}
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
        {errors.occasion && <div className="error">{errors.occasion}</div>}
      </div>
      <button type="submit">Submit reservation</button>
    </form>
  );
};

export default BookingForm;