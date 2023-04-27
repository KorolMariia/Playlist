import React from 'react';
import './NotFound.scss';
import Panda from '../../components/Panda/Panda';
import NavBar from '../../components/NavBar/NavBar';

export default function NotFound() {

  return (
    <>
      <NavBar />
      <Panda />
      <div className="wrapper-notfound">
        <h1 className="title">404</h1>
        <p className="err">PAGE NOT FOUND</p>
      </div>
    </>
  );
};