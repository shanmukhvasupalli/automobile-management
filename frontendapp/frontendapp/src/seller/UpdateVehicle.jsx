import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UpdateVehicle() {
    const [vehicleData, setVehicleData] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

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

    const handleChange = (e) => {
        setVehicleData({ ...vehicleData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = { ...vehicleData }; 
            delete formDataToSend.file; 

            const response = await axios.put(`https://automobile-management.onrender.com/updatevehicle/${id}`, formDataToSend);

            if (response.status === 200) {
                setMessage('Vehicle updated successfully');
            }
            setError('');
        } catch (error) {
            setMessage('');
            setError(error.response.data);
        }
    };

    if (!vehicleData) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    
      return (
        vehicleData ? (
            <div className="update-profile-container">
            <h3 align="center"><u>Update Vehicle</u></h3>
            {message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{ color: 'red' }}>{error}</h4>}
            <form onSubmit={handleSubmit}>
            <div>
                    <label>Category</label>
                    <input type="text" id="category" value={vehicleData.category} onChange={handleChange} required />
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" id="title" value={vehicleData.title} onChange={handleChange} required />
                </div>
                <div>
                    <label>Type</label>
                    <input type="text" id="type" value={vehicleData.type} onChange={handleChange} required />
                </div>
                <div>
                    <label>Company</label>
                    <input type="text" id="company" value={vehicleData.company} onChange={handleChange} required />
                </div>
                <div>
                    <label>Model</label>
                    <input type="text" id="model" value={vehicleData.model} onChange={handleChange} required />
                </div>
                <div>
                    <label>Year</label>
                    <input type="text" id="year" value={vehicleData.year} onChange={handleChange} required />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" id="price" value={vehicleData.price} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" id="description" value={vehicleData.description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Rating</label>
                    <input type="text" id="rating" value={vehicleData.rating} onChange={handleChange} required />
                </div>
                {/* <div>
                    <label>Image</label>
                    <input type="file" onChange={handleFileChange} />
                </div> */}
                <button type="submit">Update Vehicle</button>
            </form>
        </div>

        ) : (
            <p>No vehicle found</p>
          )
        );
      }
      