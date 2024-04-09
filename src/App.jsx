import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Register from './Register.jsx'

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;