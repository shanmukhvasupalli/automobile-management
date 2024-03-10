import React, { useState } from 'react';
import axios from 'axios';
import './user.css'
export default function Registration() 
{
  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    
    setFormData({...formData, [e.target.id]: e.target.value}); //[] is used to access the field 
    
    // It updates the state formData by adding or updating a property with a key equal to 
    //the ID of the input field 
    //that triggered the change event (e.target.id). The value of this property is 
    //set to the new value entered in that input field (e.target.value).
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2024/insertuser', formData);
      if (response.status === 200) 
      {
        //It will set all fields to ""
        setFormData({
          fullName: '',
          email: '',
          password: '',
        });
      }
      setMessage(response.data);
      setError(''); //set error to ""
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };
  
  return (
    <div className='mainbox'>
      <h3 align="center"><u>User Registration</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
        <div className='txt_field'>
          {/* <label>Full Name</label> */}
          <input placeholder='Enter Full Name' type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div className='txt_field'>
          {/* <label>Email</label> */}
          <input placeholder='Enter Email' type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className='txt_field'>
          {/* <label>Password</label> */}
          <input placeholder='Enter Password' type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}