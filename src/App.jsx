// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.module.css';
import MoviesGrid from './MoviesGrid';

const App = () => {
  return (
    <Provider store={store}>
      <MoviesGrid />
    </Provider>
  );
};

export default App;