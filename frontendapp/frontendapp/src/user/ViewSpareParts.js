import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of Navigate
import ViweVehicleDetails from './ViewVehicleDetails';
import { Button } from 'bootstrap';

export default function ViewSpareParts() {
  const [spareparts, setSpareParts] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook here

  const fetchSpareParts = async () => {
    try {
      const response = await axios.get('https://automobile-management.onrender.com/viewspareparts');
      setSpareParts(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  useEffect(() => {
    fetchSpareParts();
  }, []);

  const handleview = (id)=>{
    navigate(`/viewspareparts/${id}`); 
  }

  return (
    <div>
      <h1 align="center">Spare Parts</h1>
      <div className="grid-container">
        {spareparts.length > 0 ? (
          spareparts.map((sparepart, index) => (
            <div key={index} className="card">
              <div className="card-image">
                <img src={`https://automobile-management.onrender.com/sparepartsimage/${sparepart.file}`} alt="sparepart" />
              </div>
              <div className="card-details">
                <h2>{sparepart.title}</h2>
                <div className="rating">
                    {Array.from({ length: sparepart.rating }, (_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                </div>
                <p className="price">Price: <strong>{sparepart.price}</strong></p>
                <button onClick={()=>handleview(sparepart._id)} className="view-more">View More</button>
              </div>
            </div>
          ))
        ) : (
          <p align="center">No spare parts found</p>
        )}
      </div>
    </div>
  )
}
