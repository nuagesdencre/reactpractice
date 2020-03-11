import {combineReducers} from 'redux';

const songReducer = () => {
    return [
        {
            title: 'All Star', duration: '3:10'
        },
        {
            title: 'Cruel Summer', duration: '2:12'
        },
        {
            title: 'Oh Wonder', duration: '4:25'
        },
        {
            title: 'Aloha', duration: '2:47'
        }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    } else {
        return selectedSong
    }
}

export default combinedReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});

