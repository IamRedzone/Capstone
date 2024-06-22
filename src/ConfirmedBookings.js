import React from 'react';

const ConfirmedBookings = ({formData}) => {
  return (
    <section className='booking-form'>
    <div className="booking-confirmed">
      <h2>Booking Confirmed</h2>
      <p>Thank you! Your reservation has been confirmed with the following details:</p>
      <ul style={{listStyle: 'none', display:'flex', flexDirection:'column',gap:'10px', marginTop:'20px' }}>
        <li>Date: {formData.date}</li>
        <li>Time: {formData.time}</li>
        <li>Number of guests: {formData.guests}</li>
        <li>Occasion: {formData.occasion}</li>
      </ul>
    </div>
    </section>
  );
};

export default ConfirmedBookings;