import React, { createContext, useState } from 'react';
import DAuth from 'dauth-sdk'; // Assuming DAuth has an npm package

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const loggedInUser = await DAuth.login(email, password);
        setUser(loggedInUser);
    };

    const logout = () => {
        DAuth.logout();
        setUser(null);
    };

    const contextValue = {
        user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
