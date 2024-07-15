import React, { useContext } from 'react';
import "./DisplayPlaylist.css"
import { useParams } from 'react-router-dom';
import { aIcon } from '../assets/assets';
import playlists from '../assets/playlists';
import songs from '../assets/songs';
import { PlayerContext } from '../context/PlayerContext';

const Song = ({ index, id, pid, click1, click2 }) => {    
    const song = songs[id];

    return(
        <div className="playlist-song">
            <h3>{index+1}</h3>
            <img onClick={() => {
                click1(id)
                click2(pid)
            }} src={song.cover} alt={song.name} />
            <div className="playlist-song-details">
                <h4>{song.name}</h4>
                <p>{song.artist}</p>
            </div>
        </div>
    );
}

const AddSong = () => {
    return(
        <div className="playlist-song">
            <h3> </h3>
            <img src={aIcon.plusCircle} alt="" />
            <div className="playlist-song-details">
                <h4>Add song</h4>
            </div>
        </div>
    );
}

const DisplayPlaylist = () => {
    const {id} = useParams();
    const playlist = playlists.find(p => p.id === parseInt(id));

    const { playWithId, setPlaylistId } = useContext(PlayerContext)

    return (
        <div className="display-playlist">
            <div className="playlist-details">
                <img src={playlist.cover} alt={playlist.name} />
                <div className="playlist-details-text">
                    <h1>{playlist.name}</h1>
                    <p>{playlist.description}</p>
                </div>
            </div>
            <div className="playlist-controls">
                <img src={aIcon.play} alt="" />
            </div>
            <div className="playlist-songs">
                {playlist.songs.map((songId, index) => (<Song key={index} index={index} id={songId} pid={id} click1={playWithId} click2={setPlaylistId} />))}
                <AddSong />
            </div>
        </div>
    );
}

export default DisplayPlaylist;
