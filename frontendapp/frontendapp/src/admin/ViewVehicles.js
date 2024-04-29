import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export default function AdminViewVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate(); // Import and use useNavigate hook

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('https://automobile-management.onrender.com/viewvehicles');
      setVehicles(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleview = (id) => {
    navigate(`/viewvehicles/${id}`); 
  }

  const deleteVehicle = async (id) => {
    try {
      await axios.delete(`https://automobile-management.onrender.com/deletevehicle/${id}`);
      fetchVehicles();
    } catch (error) {
      console.error(error.message);
    }
  }

  const updateVehicle = async (id) => {
    navigate(`/updatevehicle/${id}`);
  }

  return (
    <div>
      <h1 align="center">Vehicles</h1>
      <div className="grid-container">
        {vehicles.length > 0 ? (
          vehicles.map((vehicle, index) => (
            <div key={index} className="card">
              <div className="card-image">
                <img src={`https://automobile-management.onrender.com/vehicleimage/${vehicle.file}`} alt="vehicle" />
              </div>
              <div className="card-details">
                <h2>{vehicle.title}</h2>
                <div className="rating">
                  {Array.from({ length: vehicle.rating }, (_, index) => (
                      <span key={index}>⭐</span>
                        ))}
                    </div>
                <p className="price">Price: <strong>{vehicle.price}</strong></p>
                <button onClick={() => handleview(vehicle._id)} className="view-more">View More</button>
                <button className="view-more" onClick={() => updateVehicle(vehicle._id)}>Update</button>
                <button className="view-more" onClick={() => deleteVehicle(vehicle._id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p align="center">No vehicles found</p>
        )}
      </div>
    </div>
  )
}
