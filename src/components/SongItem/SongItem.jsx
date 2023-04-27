import React from 'react';
import './SongItem.scss';
import ButtonLike from '../ButtonLike/ButtonLike';
import ButtonDelete from '..//ButtonDelete/ButtonDelete';
import ImageLiked from '../ImageLiked/ImageLiked';


export default function SongItem({ song }) {

  return (
    <>
      <li
        className={song.isLiked ? "item" : "item item-margin"}>
        {song.isLiked ? <ImageLiked /> : ''}
        {song.name}
        <ButtonLike song={song} />
        <ButtonDelete song={song} />
      </li>
    </>
  );
};