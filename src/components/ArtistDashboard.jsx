import React, { useState } from 'react';
import './ArtistDashboard.css';

const ArtistDashboard = () => {
    const [song, setSong] = useState({ title: '', cover: '', audio: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSong({ ...song, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setSong({ ...song, [name]: files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to upload song
    };

    return (
        <div className="artist-dashboard">
            <h2>Upload New Music</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={song.title} onChange={handleChange} placeholder="Song Title" required />
                <input type="file" name="cover" onChange={handleFileChange} accept="image/*" required />
                <input type="file" name="audio" onChange={handleFileChange} accept="audio/*" required />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default ArtistDashboard;
