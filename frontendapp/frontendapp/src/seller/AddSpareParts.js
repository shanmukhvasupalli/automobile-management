import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function AddSpareParts() {
    const [formData, setFormData] = useState({
        category: '',
        title: '',
        type: '',
        company: '',
        model: '',
        price: '',
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
            const response = await axios.post('http://localhost:2024/addspareparts', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Set content type for FormData
                }
            });

            if (response.status === 200) {
                setFormData({
                    category: '',
                    title: '',
                    type: '',
                    company: '',
                    model: '',
                    price: '',
                    rating: '',
                    file: null
                });
                fileInputRef.current.value = '';
            }
            setMessage(response.data);
            setError('');
        } catch (error) {
            setError(error.response.data);
            setMessage('');
        }
    };

    return (
        <div className="add-spareparts-container">
            <h3>Add Spare Part</h3>
            {message && <h4>{message}</h4>}
            {error && <h4 style={{ color: 'red' }}>{error}</h4>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label>Category</label>
                    <input type="text" id="category" value={formData.category} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" id="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <input type="text" id="type" value={formData.type} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Company</label>
                    <input type="text" id="company" value={formData.company} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Model</label>
                    <input type="text" id="model" value={formData.model} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" id="price" value={formData.price} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Rating</label>
                    <input type="text" id="rating" value={formData.rating} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
                </div>
                <button type="submit">Add Spare Part</button>
            </form>
        </div>
    );
}
