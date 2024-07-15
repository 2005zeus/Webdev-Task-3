import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtistRegistration.css';

const ArtistRegistration = () => {
    const [artist, setArtist] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArtist({ ...artist, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to register artist
        navigate('/artist-dashboard'); // Redirect to artist dashboard after registration
    };

    return (
        <div className="artist-registration">
            <h2>Register as an Artist</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={artist.name} onChange={handleChange} placeholder="Name" required />
                <input type="email" name="email" value={artist.email} onChange={handleChange} placeholder="Email" required />
                <input type="password" name="password" value={artist.password} onChange={handleChange} placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default ArtistRegistration;
