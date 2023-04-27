import axios from "axios";


const baseSongConfig = axios.create({
    baseURL: 'http://localhost:4000',
});

export default async function getData() {
    const res = await baseSongConfig.get('/songs');
    return res.data;
};


