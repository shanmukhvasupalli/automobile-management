import React, { useState } from 'react';
import './admin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminHome from './AdminHome';


export default function AdminLogin() 
{
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name , value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2024/checkadminlogin', formData);
      if (response.data!=null) 
      {
        navigate("/AdminHome")
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div className='mainbox'>
      <h3 align="center"><u>Admin Login</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div className='txt_field'>
          {/* <label>Username</label> */}
          <span></span>
          <input placeholder='Username' type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className='txt_field'>
          {/* <label>Password</label> */}
          <span></span>
          <input placeholder='Password' type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}