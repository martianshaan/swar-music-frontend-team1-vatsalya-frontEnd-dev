import React from 'react'
import NavBar from './NavBar/NavBar'
import SideNavBar from './SideNavBar/SideNavBar'
import "./Dashboard.css"
import SongsClient from './SongsClient/SongsClient'
import {Route,Routes } from 'react-router-dom';
import Home from '../Admin/Home/Home'
import HomeClient from './HomeClient/HomeClient'

function Dashboard() {
  return (
    <div>
      {/* <NavBar/> */}
      <div className="container">
      <SideNavBar/>
      <div className="others">
      <Routes>
      <Route path="" exact element={<HomeClient/>}/>
      <Route path="songsList" element={<SongsClient/>}/>
      {/* <Route path="users" element={<Users/>}/>
      <Route path="songs" element={<Songs/>}/> */}
      </Routes>
      </div>
    </div>
    </div>
  )
}

export default Dashboard