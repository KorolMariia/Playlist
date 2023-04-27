import React from 'react';import ReactDOM from 'react-dom/client';
import { SongContext } from './context/Context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SongContext>
    <App />
  </SongContext>,
);
