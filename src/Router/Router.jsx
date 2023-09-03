import React from 'react'
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Header from '../components/Header';
import Home from '../pages/Home';
const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router