import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PlayerContextProvider from './context/PlayerContext.jsx';
// import AuthContextProvider from './context/AuthContext'; 
import FriendsContextProvider from './context/FriendsContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <AuthContextProvider> */}
    <FriendsContextProvider>
    <PlayerContextProvider>
    <App />
    </PlayerContextProvider>
    </FriendsContextProvider>
    {/* </AuthContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

