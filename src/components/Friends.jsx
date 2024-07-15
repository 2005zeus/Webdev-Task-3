import React, { useContext } from 'react';
import './Friends.css'; // Import the CSS file
import { PlayerContext } from '../context/PlayerContext'; // Adjust based on where your context is

const Friends = () => {
    const { friends, friendRequests, searchFriends } = useContext(PlayerContext); // Use your actual context

    return (
        <div className="friends-container">
            <div className="friends-header">
                <h2>Friends</h2>
                <div className="search-bar">
                    <input type="text" placeholder="Search friends..." onChange={searchFriends} />
                    <span className="search-icon">&#128269;</span> {/* Unicode for search icon */}
                </div>
            </div>

            <div className="friends-list">
                {friends.map(friend => (
                    <div className="friend-item" key={friend.id}>
                        <img src={friend.profilePic} alt={friend.name} />
                        <div className="friend-info">
                            <h3>{friend.name}</h3>
                            <p>{friend.status}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="friend-requests">
                <h3>Friend Requests</h3>
                {friendRequests.map(request => (
                    <div className="friend-request-item" key={request.id}>
                        <img src={request.profilePic} alt={request.name} />
                        <div className="request-info">
                            <h3>{request.name}</h3>
                            <p>{request.mutualFriends} mutual friends</p>
                        </div>
                        <div className="request-actions">
                            <button className="accept-button">Accept</button>
                            <button className="decline-button">Decline</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Friends;
