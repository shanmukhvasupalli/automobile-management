//material ui imports

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import './admin.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewSellers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:2024/viewsellers');
      setUsers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUsers = async (email) => {
    try {
      await axios.delete(`http://localhost:2024/deleteseller/${email}`);
      fetchUsers();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Sellers</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Action</th>
              <th>Request</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(users) && users.length > 0 ? (
    users.map((users, index) => (
      <tr key={index}>
        <td>{users.fullname}</td>
        <td>{users.gender}</td>
        <td>{users.email}</td>
        <td>{users.location}</td>
        <td>{users.contact}</td>
        <td>
          {/* <button onClick={() => deleteUsers(users.email)} className='button'>Delete</button> */}
          <Button onClick={() => deleteUsers(users.email)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
        </td>
        <td>
            <Button variant="contained" endIcon={<SendIcon />}>  Approve</Button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="3">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}