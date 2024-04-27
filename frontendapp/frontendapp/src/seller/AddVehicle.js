import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function AddVehicle() {
    const [formData, setFormData] = useState({
        category: '',
        title: '',
        type: '',
        company: '',
        model: '',
        year: '',
        price: '',
        description: '',
        rating: '',
        file: null
    });

    const fileInputRef = useRef(null);

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            for (let key in formData) {
                formDataToSend.append(key, formData[key]);
            }
            const response = await axios.post('https://automobile-management.onrender.com/addvehicle', formDataToSend);

            if (response.status === 200) {
                setFormData({
                    category: '',
                    title: '',
                    type: '',
                    company: '',
                    model: '',
                    year: '',
                    price: '',
                    description: '',
                    rating: '',
                    file: null
                });
                fileInputRef.current.value = '';
                setMessage('Vehicle added Successfully');
                setError('');
            } else {
                setError('Failed to add vehicle');
                setMessage('');
            }
        } catch (error) {
            setError('Failed to add vehicle');
            setMessage('');
        }
    };

    return (
        <div className="add-vehicle-container">
            <h3>Add new Vehicle</h3>
            {message && <h4>{message}</h4>}
            {error && <h4 style={{ color: 'red' }}>{error}</h4>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label>Category</label>
                    <input type="text" id="category" value={formData.category} onChange={handleChange} required />
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" id="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div>
                    <label>Type</label>
                    <input type="text" id="type" value={formData.type} onChange={handleChange} required />
                </div>
                <div>
                    <label>Company</label>
                    <input type="text" id="company" value={formData.company} onChange={handleChange} required />
                </div>
                <div>
                    <label>Model</label>
                    <input type="text" id="model" value={formData.model} onChange={handleChange} required />
                </div>
                <div>
                    <label>Year</label>
                    <input type="text" id="year" value={formData.year} onChange={handleChange} required />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" id="price" value={formData.price} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" id="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Rating</label>
                    <input type="number" id="rating" value={formData.rating} onChange={handleChange} required />
                </div>
                <div>
                    <label>Image</label>
                    <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
                </div>
                <button type="submit">Add Vehicle</button>
            </form>
        </div>
    );
}
