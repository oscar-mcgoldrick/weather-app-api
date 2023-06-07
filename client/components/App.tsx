import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { getWelcome } from '../apiClient'
import cities from '../../data/cities'
import { getCityTemps } from '../api/weatherApi'

import Nav from './Nav'

function App() {

  return <>
  <Nav />
  <Outlet />
  </>
}

export default App
