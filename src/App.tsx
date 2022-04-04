import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Ques from './Components/Ques';
import Result from './Components/Result';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Input />} />
        <Route path="ques" element={<Ques />} />
        <Route path="res" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
