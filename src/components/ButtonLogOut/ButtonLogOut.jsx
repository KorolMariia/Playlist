import React from 'react'; import './ButtonLogOut.scss';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export default function ButtonLogOut() {
  const navigate = useNavigate();

  function navigateToLogin() {
    navigate('/');
  }

  return (
    <>
      <Button
        type="button"
        nameOfClass="custom-btn btn-1"
        value="LogOut"
        onClick={() => {
          navigateToLogin();
          localStorage.removeItem('AUTH_TOKEN');
        }}
      />
    </>
  );
}
