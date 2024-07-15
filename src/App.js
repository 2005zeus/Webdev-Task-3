import { useContext } from 'react';
import './App.css';
import songs from './assets/songs';
import Display from './components/Display';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import { PlayerContext } from './context/PlayerContext';
import ArtistRegistration from './components/ArtistRegistration'; // Added
import ArtistDashboard from './components/ArtistDashboard'; // Added
import AutoPlayNextSong from './components/AutoPlayNextSong'; // Added
import { Route, Routes } from 'react-router-dom';

function App() {

  const { audioRef, track } = useContext(PlayerContext)

  return (
    <div className="App">
      <Sidebar />
      <Player />

      <Display />

      <Routes> {/* Added */}
        <Route path="/register-artist" element={<ArtistRegistration />} /> {/* Added */}
        <Route path="/artist-dashboard" element={<ArtistDashboard />} /> {/* Added */}
      </Routes>

      <AutoPlayNextSong /> {/* Added */}
      <audio ref={audioRef} src={songs[track].file} preload='auto'></audio>
    </div>
  );
}

export default App;
