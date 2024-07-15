import React, { useContext, useEffect, useState } from 'react';
import './Lyrics.css';
import { PlayerContext } from '../context/PlayerContext';

const Lyrics = () => {
    const { currentSong } = useContext(PlayerContext);
    const [lyrics, setLyrics] = useState('');

    useEffect(() => {
        if (currentSong) {
            fetch(`https://api.lyrics.ovh/v1/${currentSong.artist}/${currentSong.name}`)
                .then(response => response.json())
                .then(data => setLyrics(data.lyrics))
                .catch(error => console.error('Error fetching lyrics:', error));
        }
    }, [currentSong]);

    return (
        <div className="lyrics">
            <h2>Lyrics</h2>
            <pre>{lyrics}</pre>
        </div>
    );
};

export default Lyrics;
