import React, { useState } from 'react';
import './seller.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function SellerLogin({onSellerLogin}) 
{
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('https://automobile-management.onrender.com/checksellerlogin', formData);
      if (response.data!=null) 
      {
        onSellerLogin();
        localStorage.setItem("seller",JSON.stringify(response.data))
        navigate("/sellerhome");
        //console.log(response.data)
        //navigate("/sellerhome");
        //window.location.href = "https://lms.kluniversity.in/login/index.php"
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
      <h3 align="center"><u>Seller Login</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div className='txt_field'>
          {/* <label>Email</label> */}
          <input placeholder='Username' type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className='txt_field'>
          {/* <label>Password</label> */}
          <input placeholder='password' type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
        <u><a style={{cursor: 'pointer'}} onClick={() => navigate('/sellerregistration')}>Register here ?</a></u>
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}