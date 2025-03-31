import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hero from './pages/Hero';
import Home from './pages/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/home' element={<Home />} />
          <Route path='/auth/signin' element={<SignIn />} />
          <Route path='/auth/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;