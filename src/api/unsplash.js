import axios from 'axios';

const API_KEY = process.env.REACT_APP_PICS_API_KEY;

export default axios.create({
    headers: {
        Authorization: API_KEY
    },

    baseURL: 'https://api.unsplash.com/'
})