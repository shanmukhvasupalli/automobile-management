import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ViewSparePartsDetails() {
  const [sparePartsData, setSparePartsData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSparePartsData = async () => {
      try {
        const response = await axios.get(`https://automobile-management.onrender.com/viewsparepartdetails/${id}`);
        setSparePartsData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (id) {
      fetchSparePartsData();
    }
  }, [id]);

  const handleBuyClick = () => {
    setSparePartsData(prevData => ({
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
    sparePartsData ? (
      <div className="vehicle-details">
        <div className="vehicle-image">
          <img src={`https://automobile-management.onrender.com/sparepartsimage/${sparePartsData.file}`} alt={sparePartsData.title} />
        </div>
        <div className="vehicle-info">
          <h2>{sparePartsData.title}</h2>
          <p>{sparePartsData.company}</p>
          <div>{renderStars(sparePartsData.rating)}</div>
          <p><strong>{sparePartsData.price}</strong></p>
        
        <div className="additional-info">
            <p>Model: {sparePartsData.model}</p>
            <p>Type: {sparePartsData.type}</p>
          </div>
          <br/>
          <button style={{width:"180px"}} onClick={handleBuyClick} className="view-more">{sparePartsData.status ? 'Buy Again' : 'Buy Now'}</button> 
      </div>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
}