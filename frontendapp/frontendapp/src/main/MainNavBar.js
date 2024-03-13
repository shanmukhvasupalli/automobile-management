import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact';
import UserLogin from './../user/UserLogin';
import Registration from './../user/Registration'; 
import AdminLogin from './../admin/AdminLogin';
import './style.css'
import SellerLogin from '../seller/SellerLogin';
import SellerRegistration from '../seller/SellerRegistration';
import ProfileImage from './../images/user.png';
import MyProfile from '../user/MyProfile';
export default function MainNavBar() {
  return (
    <div>
       
       <nav>
        <div className="logo">
            <Link to="/">Drive Max</Link>
        </div>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/registration">Sign Up</Link>
            <Link to="/userlogin">Login</Link>
            <Link to="/sellerlogin">Be a Seller</Link>
            <Link to="/adminlogin">Admin Login</Link>
            {/* updatation of profile image here ./../images/user.png */}
            <Link to ="/myprofile"><img src={ProfileImage} alt="Profile" className="profile-image"/></Link>
        </ul>
        </nav>


     <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/contact" element={<Contact/>} exact/>
        <Route path="/registration" element={<Registration/>} exact/>
        <Route path="/userlogin" element={<UserLogin/>} exact/>
        <Route path="/adminlogin" element={<AdminLogin/>} exact/>
        <Route path="/sellerlogin" element={<SellerLogin/>} exact/>
        <Route path="/sellerregistration" element={<SellerRegistration/>} exact />
        <Route path="/myprofile" element= {<MyProfile/>} exact/>
     </Routes>

    </div>
  )
}
