import React from 'react';
import './Songs.scss';
import AddSong from "../../components/AddSong/AddSong";
import SongsList from "../../components/SongList/SongsList";
import Counter from "../../components/CounterSongs/CounterSongs";
import SortSong from '../../components/SortSong/SortSong';
import NavBar from '../../components/NavBar/NavBar';
import LoginHeader from '../../components/LoginHeader/LoginHeader';
import { useContext } from 'react';
import { SongContextComponent } from "../../context/Context";


export default function Songs() {
  const [{ songs },] = useContext(SongContextComponent);
  return (
    <>
      <LoginHeader />
      <NavBar />
      <h2 className='main-title'>Playlist</h2>
      <div className="playlist">
        <div className='wrapper'>
          <AddSong />
          <SortSong />
        </div>
        {songs ? <SongsList songs={songs} /> : ''}
        {songs ? <Counter counter={songs.length} /> : ''}
      </div>
    </>
  );
};
