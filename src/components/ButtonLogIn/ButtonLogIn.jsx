import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SongContextComponent } from "../../context/Context";
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import { SAVE_NAME } from '../../reducer/songReduser';
import './ButtonLogIn.scss';

export default function ButtonLogIn({ errors, handleSubmit }) {
  const [isFormValid, setIsFormValid] = useState(false);
  const [, dispatch] = useContext(SongContextComponent);
  const key = uuidv4();
  const navigate = useNavigate();

  const handleOnClick = () => {
    handleSubmit((data) => {
      setIsFormValid(true);
      navigate('/songs');
      localStorage.setItem('AUTH_TOKEN', `${key}`);
      dispatch({
        type: SAVE_NAME,
        payload: data.username,
      })
    })();
  };

  return (
    <>
      <Button
        type="button"
        nameOfClass="btn"
        value="Login"
        onClick={handleOnClick}
        disabled={!isFormValid}
      />
      {errors && errors.length > 0 && (
        <p className="error">{errors[0].message}</p>
      )}
    </>
  );
}
