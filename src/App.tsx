import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Home } from './features/home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { DownloadButton } from './features/home/DownloadButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App container mt-5">
        <Home title="Moentum"></Home>
        <DownloadButton></DownloadButton>
      </div>

    </Router>
  )
}

export default App
