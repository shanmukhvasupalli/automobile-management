import React from 'react'
import { Route, Routes, Link , useNavigate} from 'react-router-dom'
import UserHome from '../user/UserHome'
import ViewUsers from '../admin/ViewUsers'
import ViewTransaction from './ViewTransaction'
//import AddData from './AddData'
import AddVehicle from './AddVehicle'
import AddSpareParts from './AddSpareParts'
import AdminViewSpareParts from '../admin/ViewSpareParts'
import AdminViewVehicles from '../admin/ViewVehicles'
import ViewVehicleDetails from '../user/ViewVehicleDetails'
import ViewSparePartsDetails from '../user/ViewSparePartsDetails'
import UpdateVehicle from './UpdateVehicle'
import UpdateSpareParts from './UpdateSpareParts'

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
          {/* <Link to="/viewusers">View Users</Link> */}
          <Link to="/addvehicle">Add New Vehical</Link>
          <Link to="/addspareparts">Add New Spareparts</Link>
          <Link to="/viewvehicles">View Vehicles</Link>
          <Link to='/viewspareparts'>View Spareparts</Link>
          <Link onClick={logout}>Logout</Link>
      </ul>
   </nav>

       <Routes>
       <Route path="/" Component={UserHome} exact/>
       <Route path="/viewusers" Component={ViewUsers} exact/>
       <Route path="/viewtransactions" Component={ViewTransaction} exact/>
       <Route path="/addvehicle" Component={AddVehicle} exact/>
       <Route path="/addspareparts" Component={AddSpareParts} exact/>
       <Route path="/viewvehicles/:id" element ={<ViewVehicleDetails/>} exact />
       <Route path = "/viewspareparts/:id" element ={<ViewSparePartsDetails/>} exact />
       <Route path="/viewvehicles" Component={AdminViewVehicles} exact/>
       <Route path = "/viewspareparts" Component={AdminViewSpareParts} exact/>
       <Route path = '/updatevehicle/:id' element ={<UpdateVehicle/>} exact/>
       <Route path = '/updatesparepart/:id' element ={<UpdateSpareParts/>} exact/>
       {/* <Route path="/" Component={} exact/> */}
      </Routes>

  </div>
  )
}
