import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './components/Register'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
           <Route path="/" element>  </Route>
          <Route path="/register" element={<Register/>}></Route>
          </Routes>
      
      </BrowserRouter>
    </div>
  )
}
