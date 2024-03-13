import React from 'react'
import ProfileImage from './../images/user.png';

export default function MyProfile() {
  return (
    <div className='mainbox'>
        <h3 align="center">My Profile</h3>
        <div className='profile-pic-container'>
            <img src={ProfileImage} alt="Profile" className="profile-pic-big"/>
        </div>
        <div className='info'>
            <p><strong>Username:</strong> { /* Fetch username from backend here */ }</p>
            <p><strong>Email:</strong> { /* Fetch email from backend here */ }</p>
        </div>
        <button className='btn'>Change Password</button>
        <button className='btn'>Logout</button>
        <button className='btn'>Login to Another Account</button>
    </div>
  )
}
