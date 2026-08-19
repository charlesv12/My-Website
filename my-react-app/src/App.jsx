import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './layouts/NavBarLayout.jsx'
import Footer from './layouts/FooterLayout.jsx'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <NavBar />
      
      <main className="main-content">
        {/* Main page content goes here */}
      </main>

      <FooterLayout />
    </div>
  )
}

export default App
