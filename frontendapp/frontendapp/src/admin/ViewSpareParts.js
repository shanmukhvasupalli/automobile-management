import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminViewSpareParts() {
  const [spareparts, setSpareParts] = useState([]);

  const fetchSpareParts = async () => {
    try {
      const response = await axios.get('http://localhost:2024/viewspareparts');
      setSpareParts(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  

  const deleteVehicle = async (id) => {
    try {
      await axios.delete(`http://localhost:2024/deletespareparts/${id}`);
      fetchSpareParts();
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchSpareParts();
  }, []);

  return (
    <div>
      <h1 align="center">Spare Parts</h1>
      <div className="grid-container">
        {spareparts.length > 0 ? (
          spareparts.map((sparepart, index) => (
            <div key={index} className="card">
              <div className="card-image">
                <img src={`http://localhost:2024/sparepartsimage/${sparepart.file}`} alt="sparepart" />
              </div>
              <div className="card-details">
                <h2>{sparepart.title}</h2>
                <div className="rating">
                    {Array.from({ length: sparepart.rating }, (_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                </div>
                <p className="price">Price: <strong>{sparepart.price}</strong></p>
                <button className="view-more">View More</button>
                <button className="view-more" onClick={() => deleteVehicle(sparepart._id)}>Delete</button>
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
