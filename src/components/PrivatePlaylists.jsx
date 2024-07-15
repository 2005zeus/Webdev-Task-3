import React, { useState } from 'react';
import './PrivatePlaylists.css';
// import songs from '../assets/songs';

const PrivatePlaylists = () => {
    const [playlists, setPlaylists] = useState([]);
    const [newPlaylist, setNewPlaylist] = useState({ name: '', songs: [] });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPlaylist({ ...newPlaylist, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlaylists([...playlists, newPlaylist]);
        setNewPlaylist({ name: '', songs: [] });
    };

    const calculateDuration = (songs) => {
        return songs.reduce((total, songId) => total + songs[songId].duration, 0);
    };

    return (
        <div className="private-playlists">
            <h2>Create Private Playlist</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={newPlaylist.name} onChange={handleChange} placeholder="Playlist Name" required />
                <button type="submit">Create</button>
            </form>
            <div className="playlists">
                {playlists.map((playlist, index) => (
                    <div key={index} className="playlist">
                        <h3>{playlist.name}</h3>
                        <p>Total Duration: {calculateDuration(playlist.songs)} mins</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrivatePlaylists;
