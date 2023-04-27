import React from 'react';
import './ImageLiked.scss';
import like from './like.svg'

export default function ImageLiked() {
  return (
    <img
      className='like-icon'
      src={like}
      alt='Heart'
    />
  );
};