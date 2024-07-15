import React, { useState } from 'react';
import './PartyMode.css';
import playlists from '../assets/playlists';
import songs from '../assets/songs';

const PartyMode = () => {
    const [partyPlaylist, setPartyPlaylist] = useState([]);

    const combinePlaylists = (playlist1Id, playlist2Id) => {
        const playlist1 = playlists.find(p => p.id === playlist1Id);
        const playlist2 = playlists.find(p => p.id === playlist2Id);
        setPartyPlaylist([...playlist1.songs, ...playlist2.songs]);
    };

    return (
        <div className="party-mode">
            <h2>Party Mode</h2>
            <button onClick={() => combinePlaylists(0, 1)}>Combine Playlists</button>
            <div className="party-playlist">
                {partyPlaylist.map((songId, index) => (
                    <div key={index}>
                        <img src={songs[songId].cover} alt={songs[songId].name} />
                        <span>{songs[songId].name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartyMode;
