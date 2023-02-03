import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import RegisterSuccess from './components/Auth/RegisterSuccess';
import Home from './components/Home/Home';
import NavScrollExample from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <NavScrollExample />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register-success' element={<RegisterSuccess />} />
        <Route path='*' element={<h1>NOT FOUND PAGE</h1>} />
      </Routes>
    </>
  );
};

export default App;
