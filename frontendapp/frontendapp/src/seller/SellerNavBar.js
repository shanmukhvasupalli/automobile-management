import React from 'react'
import { Route, Routes, Link , useNavigate} from 'react-router-dom'
import UserHome from '../user/UserHome'
import ViewUsers from '../admin/ViewUsers'
import ViewTransaction from './ViewTransaction'
//import AddData from './AddData'
import AddVehicle from './AddVehicle'
import AddSpareParts from './AddSpareParts'

export default function SellerNavBar() {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('isSellerLoggedIn')
    localStorage.removeItem('seller')
    navigate('/login')
    window.location.reload()
  }
  return (
    <div>
    <nav>
      <ul>
          <Link  Link to="/">Home</Link>
          <Link to="/viewusers">View Users</Link>
          <Link to="/addvehicle">Add New Vehical</Link>
          <Link to="/addspareparts">Add New Spareparts</Link>
          <Link onClick={logout}>Logout</Link>
      </ul>
   </nav>

       <Routes>
       <Route path="/" Component={UserHome} exact/>
       <Route path="/viewusers" Component={ViewUsers} exact/>
       <Route path="/viewtransactions" Component={ViewTransaction} exact/>
       <Route path="/addvehicle" Component={AddVehicle} exact/>
        <Route path="/addspareparts" Component={AddSpareParts} exact/>
       {/* <Route path="/" Component={} exact/> */}
      </Routes>

  </div>
  )
}
