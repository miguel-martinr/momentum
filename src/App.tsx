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
import { Form } from './features/home/Upload/Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App container mt-5">
        <Home title="Moentum"></Home>
        <Form></Form>
      </div>

    </Router>
  )
}

export default App
