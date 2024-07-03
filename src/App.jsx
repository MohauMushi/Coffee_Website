import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HomePage from './Components/Home/Home'
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
