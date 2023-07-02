import React from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css';

import Components from './components';
import Website from './components/website';
import Dashboard from './components/dashboard';
import AdminProfile from './components/dashboard/adminProfile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Components />} /> 
        <Route path="/website" element={<Website />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/admin-profile" element={<AdminProfile />} /> 
      </Routes>
    </>
  );
}

export default App;
