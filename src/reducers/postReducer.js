export default (state =[], action) => {
    switch (action.type){
        case 'FETCH_POSTS':
            console.log('action triggered!');
            return action.payload;

        default:
            return state;
    }
}