import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import City from './components/City'
import Home from './components/Home'
import AddCity from './components/AddCity'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<Home />} />
    <Route path='/city/:city' element={<City />} />
    <Route path='/city/add' element={<AddCity />} />
  </Route>
))

export default router