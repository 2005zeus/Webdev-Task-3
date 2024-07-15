import { useContext, useEffect } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import songs from '../assets/songs';

const AutoPlayNextSong = () => {
    const { currentSong, setCurrentSong } = useContext(PlayerContext);

    useEffect(() => {
        const audio = document.querySelector('audio');
        const handleEnded = () => {
            const nextSong = getNextSong(currentSong);
            setCurrentSong(nextSong);
        };
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, [currentSong, setCurrentSong]);

    const getNextSong = (song) => {
        // Simple next song logic based on genre
        const recommendations = songs.filter(s => s.genre === song.genre && s.id !== song.id);
        return recommendations.length ? recommendations[0] : songs[0];
    };

    return null;
};

export default AutoPlayNextSong;
