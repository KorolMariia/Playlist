import React from 'react';import './ButtonDelete.scss';
import { useContext } from 'react';
import { SongContextComponent } from '../../context/Context';
import { DELETE_SONG } from '../../reducer/songReduser';
import Button from '../Button/Button';

export default function ButtonDelete({ song }) {
  const [, dispatch] = useContext(SongContextComponent);
  let songId = song.id;

  return (
    <>
      <Button
        type="button"
        nameOfClass="button delete"
        value="Delete"
        onClick={() =>
          dispatch({
            type: DELETE_SONG,
            payload: { songId },
          })
        }
      />
    </>
  );
}
