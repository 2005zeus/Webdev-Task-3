import React, { useState } from 'react';
import './Friends_bkp.css';

const Friends = () => {
    const [users, setUsers] = useState([]); // Users list
    const [friends, setFriends] = useState([]);
    const [friendRequests, setFriendRequests] = useState([]);

    const sendFriendRequest = (userId) => {
        // Add logic to send friend request
        setFriendRequests([...friendRequests, userId]);
    };

    const acceptFriendRequest = (userId) => {
        // Add logic to accept friend request
        setFriends([...friends, userId]);
        setFriendRequests(friendRequests.filter(id => id !== userId));
    };

    return (
        <div className="friends">
            <h2>Friends</h2>
            <div className="friend-requests">
                <h3>Friend Requests</h3>
                {friendRequests.map((id) => (
                    <div key={id}>
                        <span>{users.find(user => user.id === id).name}</span>
                        <button onClick={() => acceptFriendRequest(id)}>Accept</button>
                    </div>
                ))}
            </div>
            <div className="friends-list">
                <h3>Friends List</h3>
                {friends.map((id) => (
                    <div key={id}>
                        <span>{users.find(user => user.id === id).name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Friends;
