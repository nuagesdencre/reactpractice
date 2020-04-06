import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {

    return async function (dispatch, getState) {
        const response = jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response})
    }

};