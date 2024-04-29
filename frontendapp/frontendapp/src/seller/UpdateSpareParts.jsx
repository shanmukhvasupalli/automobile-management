import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UpdateSpareParts() {
    const [sparePartsData, setSparePartsData] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

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

    const handleChange = (e) => {
        setSparePartsData({ ...sparePartsData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = { ...sparePartsData }; 
            delete formDataToSend.file; 

            const response = await axios.put(`https://automobile-management.onrender.com/updatespareparts/${id}`, formDataToSend);

            if (response.status === 200) {
                setMessage('Spare parts updated successfully');
            }
            setError('');
        } catch (error) {
            setMessage('');
            setError(error.response.data);
        }
    };

    if (!sparePartsData) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="update-profile-container">
            <h3 align="center"><u>Update Spare Parts</u></h3>
            {message && <h4 align="center">{message}</h4>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Category</label>
                    <input type="text" id="category" value={sparePartsData.category} onChange={handleChange} required />
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" id="title" value={sparePartsData.title} onChange={handleChange} required />
                </div>
                <div>
                    <label>Type</label>
                    <input type="text" id="type" value={sparePartsData.type} onChange={handleChange} required />
                </div>
                <div>
                    <label>Company</label>
                    <input type="text" id="company" value={sparePartsData.company} onChange={handleChange} required />
                </div>
                <div>
                    <label>Model</label>
                    <input type="text" id="model" value={sparePartsData.model} onChange={handleChange} required />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" id="price" value={sparePartsData.price} onChange={handleChange} required />
                </div>
                <div>
                    <label>Rating</label>
                    <input type="text" id="rating" value={sparePartsData.rating} onChange={handleChange} required />
                </div>
                <button type="submit">Update Spare Parts</button>
            </form>
        </div>
    );
}
