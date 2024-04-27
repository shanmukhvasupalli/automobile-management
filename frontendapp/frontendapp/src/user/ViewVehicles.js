import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import Link
import ViweVehicleDetails from './ViewVehicleDetails';
import { Button } from 'bootstrap';

export default function ViewVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate()

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('https://automobile-management.onrender.com/viewvehicles');
      setVehicles(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleview = (id)=>{
    navigate(`/viewvehicles/${id}`)
  }

  useEffect(() => {
    fetchVehicles();
  }, []);

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
                <div className="rating">
                  {Array.from({ length: vehicle.rating }, (_, index) => (
                      <span key={index}>⭐</span>
                        ))}
                    </div>

                </div>
                <p className="price">Price: <strong>{vehicle.price}</strong></p>
                <button onClick={()=>handleview(vehicle._id)} className="view-more">View More</button> {/* Use Link */}
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