import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Context from './components/contexts/Context';
import ProductPage from './components/pages/ProductPage';
import OrderPage from './components/pages/OrderPage';
import AboutPage from './components/pages/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage';
import HomePage from './components/pages/HomePage';
import Header from './components/Header';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <div className="App">
      <Context.Provider value={{ isSignedIn, setIsSignedIn }}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<ProductPage/>}/>
            <Route path="/orders" element={<OrderPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};

export default App;
