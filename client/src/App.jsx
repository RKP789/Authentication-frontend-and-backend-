import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hero from './pages/Hero';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;