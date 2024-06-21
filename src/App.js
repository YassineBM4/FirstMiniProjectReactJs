import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import List from './pages/List'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import LoginForm from './pages/LoginForm'
import SignUp from './pages/SignUp'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
