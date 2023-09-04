import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Test from './test';
import logo from './logo.svg';
import './App.css';
import Key1 from './test2';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/keyboard" element={<Key1/>} />
      </Routes>
    </div>
  );
}

export default App;
