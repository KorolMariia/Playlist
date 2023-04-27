import React from 'react';import './ButtonLike.scss';
import { useContext } from 'react';
import { SongContextComponent } from '../../context/Context';
import { LIKE_SONG } from '../../reducer/songReduser';
import Button from '../Button/Button';

export default function ButtonLike({ song }) {
  const [, dispatch] = useContext(SongContextComponent);
  let songId = song.id;

  return (
    <>
      <Button
        type="button"
        nameOfClass="button like"
        value={song.isLiked ? 'Unlike' : 'Like'}
        onClick={() =>
          dispatch({
            type: LIKE_SONG,
            payload: { songId },
          })
        }
      />
    </>
  );
}
