import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import api from './api/axiosConfig';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Trailer from './pages/trailer/Trailer';

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Reviews from './pages/reviews/Reviews';

function App() {
  //TODO
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {/* TODO */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
