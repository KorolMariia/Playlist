import React from 'react';
import { useContext, useMemo } from 'react';
import { SongContextComponent } from "../../context/Context";
import LoginHeader from '../../components/LoginHeader/LoginHeader';
import NavBar from '../../components/NavBar/NavBar';
import SongsList from "../../components/SongList/SongsList";
import Counter from "../../components/CounterSongs/CounterSongs";



export default function FavoriteSongs() {
  const [{ songs },] = useContext(SongContextComponent);
  const songsLiked = useMemo(() => {
    return songs.filter(song => song.isLiked)
  },
    [songs]);

  return (
    <>
      <LoginHeader />
      <NavBar />
      <h2 className='main-title'>Favorite songs</h2>
      <div className="playlist">
        <SongsList songs={songsLiked} />
        <Counter counter={songsLiked.length} />
      </div>
    </>
  );
};
