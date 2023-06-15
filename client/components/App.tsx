import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { getWelcome } from '../apiClient'
import cities from '../../data/cities'
import { getCityTemps } from '../api/weatherApi'

import { Header } from './Header'
import Nav from './Nav'

function App() {

  return <>
  <Header />
  <div className="main">
  <Nav />
  <Outlet />
  </div>
  </>
}

export default App
