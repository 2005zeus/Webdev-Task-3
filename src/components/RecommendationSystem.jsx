import React, { useContext, useEffect, useState } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import songs from '../assets/songs';
import './RecommendationSystem.css';

const RecommendationSystem = () => {
    const { currentSong } = useContext(PlayerContext);
    const [recommendedSongs, setRecommendedSongs] = useState([]);

    useEffect(() => {
        if (currentSong) {
            const recommendations = getRecommendations(currentSong);
            setRecommendedSongs(recommendations);
        }
    }, [currentSong]);

    const getRecommendations = (song) => {
        // Simple recommendation logic based on genre
        return songs.filter(s => s.genre === song.genre && s.id !== song.id);
    };

    return (
        <div className="recommendation-system">
            <h2>Recommended Songs</h2>
            {recommendedSongs.map(song => (
                <div key={song.id} className="recommended-song">
                    <img src={song.cover} alt={song.title} />
                    <span>{song.title}</span>
                </div>
            ))}
        </div>
    );
};

export default RecommendationSystem;
