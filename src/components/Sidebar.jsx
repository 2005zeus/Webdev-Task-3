import React, { useState } from 'react';
import "./Sidebar.css"
import { aIcon, aImg } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';
import NewPlaylistPopup from './NewPlaylistPopup.jsx';

const Sidebar = () => {
    const [showNewPlaylistPopup, setShowNewPlaylistPopup] = useState(false);

    const openNewPlaylistPopup = () => {
        setShowNewPlaylistPopup(true);
    };

    const closeNewPlaylistPopup = () => {
        setShowNewPlaylistPopup(false);
    };

    const navigate = useNavigate();

    const SidebarItem = ({ title, nav, click }) => {
        const handleClick = () => {
            if (nav===undefined) return;
            navigate(`/${nav}`); // Example navigation path
        };

        return (
            <div onClick={handleClick} className='sidebar-item'>
                <img src={aIcon[title]} alt={title} />
                <span>{title}</span>
            </div>
        );
    }
    
    const Playlist = ({ title = null, img = null }) => {
        return (
            <div className='sidebar-playlist'>
                <img src={img ? img : aImg.pCover} alt={title ? title : "Cover"} />
                <span>{title ? title : "Playlist"}</span>
            </div>
        );
    }
    
    const NewPlaylist = () => {
        return (
            <div onClick={openNewPlaylistPopup} className='sidebar-playlist'>
                <img src={aIcon.plusCircle} alt="new Cover" />
                <span>Add playlist</span>
            </div>
        );
    }

    return (
        <div className="sidebar-container">
            <div className="sidebar-section">
                <SidebarItem title="Home" nav="" />
                <SidebarItem title="Search" nav="search" />
                <SidebarItem title="Friends" />
                <SidebarItem title="Stats" />
            </div>

            <div className="sidebar-section scroll">
                <Playlist />
                <Playlist />

                <NewPlaylist />
            </div>

            {showNewPlaylistPopup && (
                <NewPlaylistPopup onClose={closeNewPlaylistPopup} />
            )}
        </div>
    );
}

export default Sidebar;
