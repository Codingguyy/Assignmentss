import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {Toaster} from 'react-hot-toast'
import Home from './pages/home'
function App() {
  return (
    <div className="max-w-4.7xl w-screen max-h-screen flex-1 flex flex-col items-center">
      <Home/>
      <Toaster
      position="top-right"
  toastOptions={{
    duration: 3000,
    style: {
      background: "#222",
      color: "#fff",
    },
  }} 
      />
    </div>
  )
}

export default App
