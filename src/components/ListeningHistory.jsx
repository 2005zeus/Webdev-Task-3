// import React, { useState, useContext } from 'react';
// import './ListeningHistory.css';
// import { PlayerContext } from '../context/PlayerContext';
// import songs from '../assets/songs';

// const ListeningHistory = () => {
//     const { listeningHistory = [] } = useContext(PlayerContext); // Ensure default value is an empty array

//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [filteredHistory, setFilteredHistory] = useState([]);

//     const filterHistory = () => {
//         const filtered = listeningHistory.filter(song => {
//             const listenedDate = new Date(song.date);
//             return listenedDate >= new Date(startDate) && listenedDate <= new Date(endDate);
//         });
//         setFilteredHistory(filtered);
//     };

//     const calculateDistribution = (type) => {
//         const distribution = filteredHistory.reduce((acc, song) => {
//             const key = songs[song.id][type];
//             acc[key] = (acc[key] || 0) + 1;
//             return acc;
//         }, {});

//         const total = filteredHistory.length;
//         return Object.keys(distribution).map(key => ({
//             key,
//             percentage: ((distribution[key] / total) * 100).toFixed(2)
//         }));
//     };

//     return (
//         <div className="listening-history">
//             <h2>Listening History</h2>
//             <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//             <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//             <button onClick={filterHistory}>Filter</button>
//             <div>
//                 <h3>Filtered History</h3>
//                 {filteredHistory.map(song => (
//                     <div key={song.id}>
//                         <img src={songs[song.id].cover} alt={songs[song.id].title} />
//                         <span>{songs[song.id].title}</span>
//                     </div>
//                 ))}
//             </div>
//             <div>
//                 <h3>Genre Distribution</h3>
//                 {calculateDistribution('genre').map(d => (
//                     <p key={d.key}>{d.key}: {d.percentage}%</p>
//                 ))}
//             </div>
//             <div>
//                 <h3>Artist Distribution</h3>
//                 {calculateDistribution('artist').map(d => (
//                     <p key={d.key}>{d.key}: {d.percentage}%</p>
//                 ))}
//             </div>
//             <div>
//                 <h3>Language Distribution</h3>
//                 {calculateDistribution('language').map(d => (
//                     <p key={d.key}>{d.key}: {d.percentage}%</p>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ListeningHistory;


import React, { useContext, useState } from 'react';
import PlayerContext from '../context/PlayerContext';
import './ListeningHistory.css';

const ListeningHistory = () => {
    const { listeningHistory } = useContext(PlayerContext) || [];
    const [timePeriod, setTimePeriod] = useState('last_week');

    const getTimePeriodFilter = () => {
        const currentDate = new Date();
        if (timePeriod === 'last_week') {
            const lastWeekDate = new Date(currentDate.setDate(currentDate.getDate() - 7));
            return lastWeekDate;
        } else if (timePeriod === 'last_month') {
            const lastMonthDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
            return lastMonthDate;
        } else if (timePeriod === 'last_year') {
            const lastYearDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
            return lastYearDate;
        } else if(timePeriod === 'today'){
            const todayDate = new Date();
            return todayDate;
        }
        return null;
    };

    // const filteredHistory = listeningHistory.filter([]);
    const filteredHistory = listeningHistory? listeningHistory.filter(item => {
        const songDate = new Date(item.date); // Assuming item.date is a valid date string
        const filterDate = getTimePeriodFilter();
        return filterDate ? songDate >= filterDate : true;
    }) : [];

    const genreDistribution = {};
    const artistDistribution = {};
    const languageDistribution = {};

    filteredHistory.forEach(item => {
        genreDistribution[item.genre] = (genreDistribution[item.genre] || 0) + 1;
        artistDistribution[item.artist] = (artistDistribution[item.artist] || 0) + 1;
        languageDistribution[item.language] = (languageDistribution[item.language] || 0) + 1;
    });

    return (
        <div className="listening-history">
            <h2>Listening History</h2>
            <select value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)}>
                <option value="today">Today</option>
                <option value="last_week">Last Week</option>
                <option value="last_month">Last Month</option>
                <option value="last_year">Last Year</option>
            </select>
            <div className="history-items">
                {filteredHistory.map(item => (
                    <div key={item.id} className="history-item">
                        <img src={item.albumArt} alt={item.title} />
                        <div className="song-info">
                            <h3>{item.title}</h3>
                            <p>{item.artist}</p>
                        </div>
                        <div className="percentage">
                            <p>Genre: {((genreDistribution[item.genre] / filteredHistory.length) * 100).toFixed(2)}%</p>
                            <p>Artist: {((artistDistribution[item.artist] / filteredHistory.length) * 100).toFixed(2)}%</p>
                            <p>Language: {((languageDistribution[item.language] / filteredHistory.length) * 100).toFixed(2)}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListeningHistory;
