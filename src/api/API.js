import axios from "axios";


const baseSongConfig = axios.create({
    baseURL: 'https://playlist-api-blond.vercel.app',
});

export default async function getData() {
    const { data } = await baseSongConfig.get('/songs');
    return data.songs;
};


