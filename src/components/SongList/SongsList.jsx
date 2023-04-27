import React from 'react';
import './SongsList.scss';
import SongItem from '../SongItem/SongItem';


export default function SongsList({ songs }) {

  return (
    <>
      <div className="songs-wrapper">
        <ul className="songs-list">
          {songs.map((song) => (
            <SongItem
              song={song}
              key={song.id}
            />
          ))}
        </ul>
      </div>
    </>
  )
};
