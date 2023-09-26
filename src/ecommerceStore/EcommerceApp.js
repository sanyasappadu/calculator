import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Layout from "./Layout";
import Cart from './Cart';
import Profile from './Profile';
function EcommerceApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>);
}

export default EcommerceApp
