import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.scss';
import { useContext, useEffect } from 'react';
import { SongContextComponent } from "./context/Context";
import { FETCH_SONG } from './reducer/songReduser';
import getData from './api/API'
import RoutesList from './routes/RoutesList';


export default function App() {
    const [, dispatch] = useContext(SongContextComponent);

    useEffect(() => {
        getData().then(data => {
            dispatch({
                type: FETCH_SONG,
                payload: data,
            });
        });
    }, [dispatch]);

    return (
        <BrowserRouter>
            <RoutesList />
        </BrowserRouter>
    );
};

