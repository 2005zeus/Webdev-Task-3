import React from 'react';
import './DisplaySearch.css';
import songs from '../assets/songs';

const DisplaySearch = () => {
    return (
        <div className="display-search">
            <div className="search-header">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="search-results">
                {songs.map(result => (
                    <div key={result.id} className="search-result">
                        <img src={result.cover} alt="Album Artwork" />
                        <div className="result-info">
                            <h3>{result.name}</h3>
                            <p>{result.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplaySearch;
