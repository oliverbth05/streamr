import axios from 'axios';

const lastfm = axios.create({
    baseURL: 'https://ws.audioscrobbler.com/2.0/',
})

export default lastfm;