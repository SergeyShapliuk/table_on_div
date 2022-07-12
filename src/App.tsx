import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';

import Main from './components/routes/Main';
import Page from './components/routes/Page';
import dataJson from './data/data.json';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main dataOut={dataJson} />} />
        <Route path="/:id" element={<Page dataOut={dataJson} />} />
      </Routes>
    </div>
  );
}

export default App;
