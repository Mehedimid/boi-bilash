import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
// import './App.css'

function App() {


  return (
    <>
      <nav>Navbar</nav>
      <main className='min-h-screen max-w-screen-2xl'><Outlet /></main>
      <footer>Footer</footer>
    </>
  )
}

export default App
