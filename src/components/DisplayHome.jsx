import React, { useContext } from 'react';
import "./DisplayHome.css"
import PlaylistItem from './PlaylistItem';
import playlists from '../assets/playlists';
import {FriendsContext} from '../context/FriendsContext'; // Added
import { PlayerContext } from '../context/PlayerContext';
import RecommendationSystem from './RecommendationSystem';

const DisplayHome = () => {
    const { friends } = useContext(FriendsContext); // Added
    const { currentSong, playingFriends } = useContext(PlayerContext); // Added

    return (
        <div className='display-home'>
            <h2>Friends' Currently Playing Songs</h2>
            {playingFriends.map(friend => (
                <div key={friend.id}>
                    <h3>{friend.name} is listening to {friend.currentSong.title}</h3>
                    <img src={friend.currentSong.cover} alt={friend.currentSong.title} />
                </div>
            ))}
            <h2>Your Playlists</h2>

            {playlists.map((item)=>(<PlaylistItem key={item.id} id={item.id} cover={item.cover} name={item.name} />))}
            <RecommendationSystem />
        </div>
    );
}

export default DisplayHome;
