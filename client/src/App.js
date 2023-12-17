import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

import Home from './page/Home'
import Map from './components/map/Map'
import MapDetail from './components/map/MapDetail'

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/map' element={<Map />}></Route>
          <Route path='/map:region' element={<MapDetail />}></Route>
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App
