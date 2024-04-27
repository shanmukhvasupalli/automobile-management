import React from 'react'
import {Route, Routes, Link,useNavigate} from 'react-router-dom'
import UserHome from './UserHome'
import ViewVehicles from './ViewVehicles'
import ViewSpareParts from './ViewSpareParts'
import ViewVehicleDetails from './ViewVehicleDetails'
import UpdateProfile from './updateProfile'
import ViewSparePartsDetails from './ViewSparePartsDetails'

export default function UserNavBar() {
const navigate = useNavigate()

const logout = () => {
    localStorage.removeItem('isUserLoggedIn')
    localStorage.removeItem('user')
    navigate('/login')
    window.location.reload()
}; 
  return (
    <div>
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/viewvehicles">View Vehicles</Link>
                <Link to="/viewspareparts">View Spare Parts</Link>
                {/* <Link to="/viewcart">View Cart</Link> */}
                <Link to="/updateprofile">Update Profile</Link>
                <Link onClick={logout}>Logout</Link>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<UserHome/>} exact />
            <Route path="/viewvehicles" element ={<ViewVehicles/>} exact />
            <Route path="/viewspareparts" element ={<ViewSpareParts/>} exact />
            <Route path="/viewvehicles/:id" element ={<ViewVehicleDetails/>} exact />
            <Route path = "/viewspareparts/:id" element ={<ViewSparePartsDetails/>} exact />
            <Route path="/updateprofile" element ={<UpdateProfile/>} exact />
        </Routes>
    </div>
  )
}
