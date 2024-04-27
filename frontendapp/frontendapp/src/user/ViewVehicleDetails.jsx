import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//import './user.css'; // Updated CSS file name

export default function VehicleDetails() {
  const [vehicleData, setVehicleData] = useState(null);
  const [error, setError] = useState(null);
  // Remove showMore state and setShowMore function
  const { id } = useParams();

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        const response = await axios.get(`https://automobile-management.onrender.com/viewvehicledetails/${id}`);
        setVehicleData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (id) {
      fetchVehicleData();
    }
  }, [id]);

  const handleBuyClick = () => {
    setVehicleData(prevData => ({
      ...prevData,
      status: !prevData.status
    }));
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <span key={index}>⭐</span>
    ));
  };

  if (!id) {
    return null;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    vehicleData ? (
      <div className="vehicle-details">
        <div className="vehicle-image">
          <img src={`https://automobile-management.onrender.com/vehicleimage/${vehicleData.file}`} alt={vehicleData.title} />
        </div>
        <div className="vehicle-info">
          <h2>{vehicleData.title}</h2>
          <p>{vehicleData.company}</p>
          <div>{renderStars(vehicleData.rating)}</div>
          <p><strong>{vehicleData.price}</strong></p>
          <p>{vehicleData.description}</p>
          {/* Remove the View More button and display additional details by default */}
          <div className="additional-info">
            <p>Year: {vehicleData.year}</p>
            <p>Model: {vehicleData.model}</p>
            <p>Type: {vehicleData.type}</p>
          </div>
          <br/>
          <button style={{width:"180px"}} onClick={handleBuyClick} className="view-more">{vehicleData.status ? 'Buy Again' : 'Buy Now'}</button> 
        </div>
      </div>
    ) : (
      <p>No vehicle found</p>
    )
  );
}
