import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Profile from './components/Profile'

function App() {
  const [numberReaded, setNumberReaded] = useState(0);

  return (
    <>
      <div className="container">
        <div className="topo"><h1>Notifications <span>{numberReaded}</span> </h1> <small>Mark all as read</small></div>
        <Profile />
      </div>
    </>
  )
}

export default App
