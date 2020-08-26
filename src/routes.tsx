import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Crust from './pages/Crust'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Topping from './pages/Topping'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="crusts" element={<Crust />} />
          <Route path="toppings" element={<Topping />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
