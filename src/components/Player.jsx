import React, { useContext } from 'react';
import "./Player.css";
import { aIcon } from '../assets/assets.js';
import songs from '../assets/songs';
import playlists from '../assets/playlists.js';
import { PlayerContext } from '../context/PlayerContext.jsx';

const Player = () => {
    const {track, playlistId, playStatus, time, togglePlay} = useContext(PlayerContext);

    let song = playlistId!==false ? playlists[playlistId].songs[track] : songs[track]

    return (
        <div className='player-container'>
            <div className="player-song">
                <img src={song.cover} alt={songs[0].name} />
                <div>
                    <h3>{song.name}</h3>
                    <p>{song.artist}</p>
                </div>
            </div>

            <div className="player-controls">
                <div className="controls-buttons">
                    <img onClick={ () => togglePlay() } src={ playStatus===false?aIcon.pause:aIcon.play } alt="" />
                </div>
                <div className="music-bar">
                    <p>{Math.floor(time.current / 60).toString().padStart(2, '0')}:{(time.current % 60).toString().padStart(2, '0')}</p>
                    <input type="range" min="0" max={time.duration} value={time.current} defaultValue="0"/>
                    <p>{Math.floor(time.duration / 60).toString().padStart(2, '0')}:{(time.duration % 60).toString().padStart(2, '0')}</p>
                </div>
            </div>

            <div className="player-right"></div>
        </div>
    );
}

export default Player;