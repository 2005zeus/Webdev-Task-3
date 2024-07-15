import React, { useState } from 'react';
import './NewPlaylistPopup.css';
import { aIcon } from '../assets/assets'; // Assuming you have icons imported
import playlistsData from '../assets/playlists'; // Assuming you have imported playlists data

const NewPlaylistPopup = ({ onClose }) => {
    const [cover, setCover] = useState("https://via.placeholder.com/300x300");
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleCoverChange = (event) => {
        setCover(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSavePlaylist = () => {
        // Generate a unique ID for the new playlist
        const newPlaylistId = playlistsData.length;
        
        // Create the new playlist object
        const newPlaylist = {
            id: newPlaylistId,
            cover: cover,
            name: name,
            description: description,
            songs: [], // Initialize with an empty array of songs
        };

        // Append the new playlist to the playlists array
        playlistsData.push(newPlaylist);
        console.log(playlistsData)

        // Close the popup
        onClose();
    };

    return (
        <div className="new-playlist-popup">
            <div className="popup-header">
                <h3>Create New Playlist</h3>
                <button onClick={onClose}><img src={aIcon.close} alt="Close" /></button>
            </div>
            <div className="popup-content">
                <label htmlFor="cover">Cover Image URL:</label>
                <input
                    type="text"
                    id="cover"
                    value={cover}
                    onChange={handleCoverChange}
                />

                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                />

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                ></textarea>
            </div>
            <div className="popup-actions">
                <button onClick={handleSavePlaylist}>Save</button>
            </div>
        </div>
    );
};

export default NewPlaylistPopup;
