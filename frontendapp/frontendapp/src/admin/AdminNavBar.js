import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './admin.css'
import AdminHome from './AdminHome';
import ViewUsers from './ViewUsers';
import ViewSellers from './ViewSellers';

export default function AdminNavBar() {
  return (
    <div>
      <nav>
        <ul>
            <Link  Link to="/">Home</Link>
            <Link to="/viewusers">View Users</Link>
            <Link to="/viewsellers">View Sellers</Link>
            <Link >Logout</Link>
        </ul>
     </nav>

         <Routes>
         <Route path="/" Component={AdminHome} exact/>
         <Route path="/viewusers" Component={ViewUsers} exact/>
         <Route path="/viewsellers" Component={ViewSellers} exact/>
        </Routes>

    </div>
  )
}
