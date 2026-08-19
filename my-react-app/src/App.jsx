import { useState } from 'react'
import NavBar from './layouts/NavBarLayout.jsx'
import FooterLayout from './layouts/FooterLayout.jsx'
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