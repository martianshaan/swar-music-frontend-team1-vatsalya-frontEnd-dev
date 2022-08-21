import { Home } from '@material-ui/icons';
import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin/Admin';
import Songs from './components/Admin/Songs/Songs';
import Users from './components/Admin/Users/Users';
import Dashboard from './components/Dashboard/Dashboard';
import HomeClient from './components/Dashboard/SongsClient/SongsClient';
import SongsClient from './components/Dashboard/SongsClient/SongsClient';
import Forgotpw from './components/SignIn screen/Login Components/Forgotpw';
import Loginscreen from './components/SignIn screen/Loginscreen';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Loginscreen/>}/>
    <Route path ="forgot" element={<Forgotpw/>}/>
    <Route path="home" element={<Dashboard/>}>
    <Route index element={<Dashboard/>}/>
    <Route path="" element={<HomeClient/>}/>
    <Route path="songsList" element={<SongsClient/>}/>
    </Route>
    <Route path="admin" element={<Admin/>}>
    <Route index element={<Admin/>}/>
    <Route path="" element={<Home/>}/>
    <Route path="users" element={<Users/>}/>
    <Route path="songs" element={<Songs/>}/>
    </Route>
    {/* <Route path="/admin/users" element={<Users/>}/> */}
    </Routes>
    </BrowserRouter> 
  );
}

export default App;
