import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Register.jsx'
import ForgotPassword from './ForgotPassword.jsx';
import Signin from './Signin.jsx';
import { Counter } from './features/counter/Counter.jsx';
import UserListPage from './UserList.jsx';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Signin />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/userlist" element={<UserListPage />} />
    </Routes>
  );
}

export default App;