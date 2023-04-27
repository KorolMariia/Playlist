import React, { useState, useEffect, useRef, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddSong.scss';
import Button from '../Button/Button';
import { SongContextComponent } from "../../context/Context";
import { ADD_SONG } from '../../reducer/songReduser';

export default function AddSong() {
  const [newSong, setNewSong] = useState('');
  const inputRef = useRef('');

  const [, dispatch] = useContext(SongContextComponent);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef])

  const onChange = function (event) {
    setNewSong(event.target.value);
  }

  const onClick = function () {
    const newSongs = {
      name: newSong,
      isLiked: false,
      id: uuidv4(),
    };

    newSongs.name.length <= 3 ?
      alert('Your string is empty or less than 3 characters') :
      dispatch({
        type: ADD_SONG,
        payload: { newSongs },
      });
    setNewSong('');
  }

  return (
    <form className="form">
      <input
        className="input-box"
        onChange={onChange}
        value={newSong}
        type="text"
        placeholder="Song..."
        ref={inputRef}
      />
      <Button
        nameOfClass="button add"
        value="Add new song..."
        onClick={onClick} />
    </form>
  );
};