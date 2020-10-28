import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Error from './components/Error'
import Navbar from './components/Navbar'
import API from './components/API'
import ThemeSwitcher from './ThemeSwitcher'

function App() {
  return (
    <>
      <ThemeSwitcher />
      <div className='todoapp'>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/API" component={API} />
          <Route component={Error} />
        </Switch>
      </div>
    </>
  )
}

export default App
