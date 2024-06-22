import React, { useState } from 'react';

const BasicForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'6px'}}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
         style={{
            height:'auto',
            width:'160px',
            padding:'4px',
            borderRadius:'4px',
            backgroundColor:'hsla(150,6%,93%,1.0)'
        }}
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
            aria-required="true"
          aria-label="first name"
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
         style={{
            height:'auto',
            width:'160px',
            padding:'4px',
            borderRadius:'4px',
            backgroundColor:'hsla(150,6%,93%,1.0)'
        }}
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
            aria-required="true"
          aria-label="Last name"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
        style={{
            height:'auto',
            width:'160px',
            padding:'4px',
            borderRadius:'4px',
            backgroundColor:'hsla(150,6%,93%,1.0)'
        }}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
            aria-required="true"
          aria-label="Email"
        />
      </div>
      <button className='foot-btn' type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;