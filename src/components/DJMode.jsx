import React, { useContext, useState, useEffect } from 'react';
import './DJMode.css';
import { PlayerContext } from '../context/PlayerContext';
import songs from '../assets/songs';

const DJMode = () => {
    const { currentSong, setCurrentSong } = useContext(PlayerContext);
    const [highlightMode, setHighlightMode] = useState(false);

    useEffect(() => {
        if (highlightMode && currentSong) {
            const highlight = songs[currentSong.id].highlight;
            const audio = document.querySelector('audio');
            audio.currentTime = highlight.start;
            const timer = setTimeout(() => {
                audio.currentTime = highlight.end;
            }, (highlight.end - highlight.start) * 1000);

            return () => clearTimeout(timer);
        }
    }, [highlightMode, currentSong]);

    const toggleHighlightMode = () => {
        setHighlightMode(!highlightMode);
    };

    return (
        <div className="dj-mode">
            <h2>DJ Mode</h2>
            <button onClick={toggleHighlightMode}>
                {highlightMode ? 'Disable' : 'Enable'} DJ Mode
            </button>
        </div>
    );
};

export default DJMode;
