//action creator
export const  selectSong =(song) => {
    //return an action
    return {
        typeOfSongSelected: 'SONG_SELECTED',
        payload: song
    };
};
