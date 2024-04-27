import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UpdateProfile() {
  const [userData, setUserData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
      setInitialData(parsedData);
    }
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {};
      for (const key in userData) {
        if (userData[key] !== initialData[key] && initialData[key] !== '') {
          updatedData[key] = userData[key];
        }
      }
      if (Object.keys(updatedData).length !== 0) {
        updatedData.email = userData.email;
        const response = await axios.put('http://localhost:2024/updateprofile', updatedData);
        setMessage(response.data);
        setError('');
        const updatedUserData = { ...initialData, ...updatedData };
        setUserData(updatedUserData);
        localStorage.setItem("user", JSON.stringify(updatedUserData));
      } else {
        setMessage("No Changes in Profile");
        setError("");
      }
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div>
      <h3 align="center"><u>Update Profile</u></h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{ color: 'red' }}>{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={userData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={userData.email} readOnly />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={userData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
