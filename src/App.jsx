import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Affiche from './components/Affiche'
import Formajoute from './components/Formajoute'
import Header from './components/Header'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Affiche />}/>
        <Route path='/ajouter' element={<Formajoute />}/> 
        <Route path='/affiche' element={<Affiche />}/> 
      </Routes>
    </BrowserRouter>
      )
}