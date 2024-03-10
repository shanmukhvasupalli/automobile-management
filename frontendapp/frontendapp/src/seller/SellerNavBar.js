import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import UserHome from '../user/UserHome'
import ViewUsers from '../admin/ViewUsers'
import ViewTransaction from './ViewTransaction'
import AddData from './AddData'

export default function SellerNavBar() {
  return (
    <div>
    <nav>
      <ul>
          <Link  Link to="/">Home</Link>
          <Link to="/viewusers">View Users</Link>
          <Link to="/viewtransactions">View Transactions</Link>
          <Link to="/addvehicals">Add New Vehical</Link>
          <Link to="/addvehicals">Add New Spareparts</Link>

          <Link >Logout</Link>
      </ul>
   </nav>

       <Routes>
       <Route path="/" Component={UserHome} exact/>
       <Route path="/viewusers" Component={ViewUsers} exact/>
       <Route path="/viewtransactions" Component={ViewTransaction} exact/>
       <Route path="/addvehicals" Component={AddData} exact/>
       {/* <Route path="/" Component={} exact/> */}
      </Routes>

  </div>
  )
}
