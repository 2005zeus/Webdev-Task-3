const { createContext, useRef, useState, useEffect } = require("react");


export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const [likedSongs, setLikedSongs] = useState([]); // Added
    const [playingFriends, setPlayingFriends] = useState([]); // Added

    const addLikedSong = (songId) => {
        setLikedSongs([...likedSongs, songId]); // Added
    };

    const audioRef = useRef();

    const [track, setTrack] = useState(0);
    const [playlistId, setPlaylistId] = useState(false);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState(
        {
            // Seconds
            current: 0,
            duration: 0
        }
    );
    const [listeningHistory, setListeningHistory] = useState([]);


    const togglePlay = () => {
        setPlayStatus(!playStatus);
        playStatus? audioRef.current.play() : audioRef.current.pause();
        // audioRef.current.play()
    }

    const playWithId = async(id) => {
        await setTrack(id);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const incrementTrack = () => {
        setTrack((prevTrack) => (prevTrack + 1));
    };

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                setTime(
                    {
                        current: Math.floor(audioRef.current.currentTime),
                        duration: Math.floor(audioRef.current.duration)
                    }
                )
            }

            audioRef.current.onended = () => {
                incrementTrack(); // Call function to increment track when song ends
                setPlayStatus(false); // Optionally set play status to false
            };
        }, 1000);
    }, [audioRef])

    const contextValue = {
        audioRef,
        track, setTrack,
        playlistId, setPlaylistId,
        playStatus, setPlayStatus,
        time, setTime,
        togglePlay,
        playWithId,
        addLikedSong, // Added
        playingFriends, // Added
        setPlayingFriends, // Added
        listeningHistory, setListeningHistory,
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
}

export default PlayerContextProvider;