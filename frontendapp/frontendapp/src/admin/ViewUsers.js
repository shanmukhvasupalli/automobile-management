//material ui imports

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import './admin.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://automobile-management.onrender.com/viewusers');
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
      await axios.delete(`https://automobile-management.onrender.com/deleteuser/${email}`);
      fetchUsers();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Users</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(users) && users.length > 0 ? (
    users.map((users, index) => (
      <tr key={index}>
        <td>{users.fullname}</td>
        <td>{users.email}</td>
        <td>
          {/* <button onClick={() => deleteUsers(users.email)} className='button'>Delete</button> */}
          <Button onClick={() => deleteUsers(users.email)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
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