import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPostsAndUser = () => async dispatch => {
    await dispatch(fetchPosts());
};

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        // console.log(response.data);
        dispatch({type: 'FETCH_POSTS', payload: response.data})
    };

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data})
};

