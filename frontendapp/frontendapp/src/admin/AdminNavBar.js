import React from 'react'
import { Route, Routes, Link,useNavigate } from 'react-router-dom'
import './admin.css'
import AdminHome from './AdminHome';
import ViewUsers from './ViewUsers';
import ViewSellers from './ViewSellers';
import AdminViewVehicles from './ViewVehicles';
import AdminViewSpareParts from './ViewSpareParts';
import ViewVehicleDetails from '../user/ViewVehicleDetails';
import ViewSparePartsDetails from '../user/ViewSparePartsDetails'

export default function AdminNavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn")
    localStorage.removeItem("admin")
    navigate("/adminlogin")
    window.location.reload()
  }
  return (
    <div>
      <nav>
        <ul>
            <Link  Link to="/">Home</Link>
            <Link to="/viewusers">View Users</Link>
            <Link to="/viewsellers">View Sellers</Link>
            <Link to="/adminviewsvehicles">View Vehicles</Link>
            <Link to="/adminviewspareparts">View Spare Parts</Link>
            <Link onClick={handleLogout}>Logout</Link>
        </ul>
     </nav>

         <Routes>
         <Route path="/" element={<AdminHome/>} exact/>
         <Route path="/viewusers" element={<ViewUsers/>} exact/>
         <Route path="/viewsellers" element={<ViewSellers/>} exact/>
         <Route path="/adminviewsvehicles" element={<AdminViewVehicles/>} exact/>
         <Route path="/adminviewspareparts" element={<AdminViewSpareParts/>} exact/>
         <Route path="/viewvehicles/:id" element ={<ViewVehicleDetails/>} exact />
          <Route path = "/viewspareparts/:id" element ={<ViewSparePartsDetails/>} exact />
        </Routes>

    </div>
  )
}
