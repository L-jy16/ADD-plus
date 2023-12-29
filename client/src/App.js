import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

import Home from './page/Home'
import Map from './components/map/Map'
import MapDetail from './components/map/MapDetail'
import Mapdepartment from './components/map/Mapdepartment.jsx'
import Mapdepartdetail from './components/map/Mapdepartdetail.jsx'

import Join01 from './components/user/Join01.jsx'
import Join02 from './components/user/Join02.jsx'
import Join03 from './components/user/Join03.jsx'
import Join04 from './components/user/Join04.jsx'
import Login from './components/user/Login.jsx'
import Find from './components/user/Find.jsx'
import Find02 from './components/user/Find02.jsx'
import Find03 from './components/user/Find03.jsx'
import Comm from './components/community/Comm.jsx'
import CommWrite from './components/community/CommWrite.jsx'
import CommDetail from './components/community/CommDetail.jsx'
import Score from './components/score/Score.jsx'


const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='/map' element={<Map />}></Route>
          <Route path='/map/mapimg' element={<MapDetail />}></Route>
          <Route path='/map/department' element={<Mapdepartment />}></Route>
          <Route path='/map/department/depart' element={<Mapdepartdetail />}></Route>

          <Route path='/comm' element={<Comm />}></Route>
          <Route path='/commwrite' element={<CommWrite />}></Route>
          <Route path='/commdetail' element={<CommDetail />}></Route>

          <Route path='/score' element={<Score />}></Route>

          <Route path='/join01' element={<Join01 />}></Route>
          <Route path='/join02' element={<Join02 />}></Route>
          <Route path='/join03' element={<Join03 />}></Route>
          <Route path='/join04' element={<Join04 />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/find' element={<Find />}></Route>
          <Route path='/find02' element={<Find02 />}></Route>
          <Route path='/find03' element={<Find03 />}></Route>
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App
