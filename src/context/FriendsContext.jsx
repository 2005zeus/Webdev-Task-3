import React, { createContext, useState } from 'react';

export const FriendsContext = createContext();

const FriendsContextProvider = (props) => {
    const [friends, setFriends] = useState([]);

    const contextValue = {
        friends,
        setFriends,
    };

    return (
        <FriendsContext.Provider value={contextValue}>
            {props.children}
        </FriendsContext.Provider>
    );
}

export default FriendsContextProvider;
