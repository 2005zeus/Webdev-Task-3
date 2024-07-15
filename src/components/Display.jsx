import React from 'react';
import './Display.css';
import { Route, Routes } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayPlaylist from './DisplayPlaylist';
import DisplaySearch from './DisplaySearch';
import DisplayLogin from './DisplayLogin';
import PrivatePlaylists from './PrivatePlaylists';
import PartyMode from './PartyMode';
import Lyrics from './Lyrics';
import DJMode from './DJMode';
import ListeningHistory from './ListeningHistory';

const Display = () => {
    return (
        <div className='display'>
            <Routes>
                <Route path='/' element={<DisplayHome />} />
                <Route path='/playlist/:id' element={<DisplayPlaylist />} />
                <Route path='/search' element={<DisplaySearch />} />
                <Route path='/login' element={<DisplayLogin />} />
                <Route path="/private-playlists" element={<PrivatePlaylists />} /> {/* Added */}
                <Route path="/party-mode" element={<PartyMode />} /> {/* Added */}
                <Route path="/lyrics" element={<Lyrics />} /> {/* Added */}
                <Route path="/dj-mode" element={<DJMode />} /> {/* Added */}
                <Route path="/listening-history" element={<ListeningHistory />} /> {/* Added */}
            </Routes>
        </div>
    );
}

export default Display;
