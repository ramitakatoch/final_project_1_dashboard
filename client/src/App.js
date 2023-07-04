import React from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css';

import Components from './components';
import Website from './components/website';
import Dashboard from './components/dashboard';
import AdminProfile from './components/dashboard/adminProfile';
import Customer from './components/dashboard/customers/customer';
import Product from './components/dashboard/products/product'
import Category from './components/dashboard/categorys/category';
import Invoice from './components/dashboard/invoices/invoice';
import Review from './components/dashboard/reviews/review'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Components />} /> 
        <Route path="/website" element={<Website />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/admin-profile" element={<AdminProfile />} /> 
        <Route path="/customer" element={<Customer />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </>
  );
}

export default App;
