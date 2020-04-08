export default (state =[], action) => {
    switch (action.type){
        case 'FETCH_USER':
            console.log('action usersReducers triggered!');
            return [...state, action.payload];

        default:
            return state;
    }
}