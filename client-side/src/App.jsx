import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;