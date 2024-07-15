import React from 'react';
import "./PlaylistItem.css"
import { useNavigate } from 'react-router-dom';

const PlaylistItem = ({id, cover, name}) => {
    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(`/playlist/${id}`)} className='playlist-item'>
            <div>
                <img src={cover} alt={name} />
                <h3>{name}</h3>
            </div>
        </div>
    );
}

export default PlaylistItem;
