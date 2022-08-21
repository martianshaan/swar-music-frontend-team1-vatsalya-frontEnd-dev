import React from 'react'
import '../HomeClient/HomeClient.css';
import { Typography } from '@mui/material';
import Footer from './Footer/Footer';
import Songimage from './Card/Songimage';
import { SearchRounded } from '@material-ui/icons';
import Songstable from '../HomeClient/SongsTable/Songstable'
function HomeClient() {
  return (
    <div className='home'>
      <div className="search__container">
        <form className='search_form'>
        <SearchRounded className='icon' />
        <input className="search__input" type="text" placeholder="Search for artists,songs and...."/>
        <button type='submit'> <Typography variant='h7'>Search</Typography></button>
        </form>
       </div>
        <Typography variant='caption' sx={{ml:'40px'}}>What's hot</Typography>
        <Typography variant='h3' solid bold sx={{ml:'20px', p:'10px'}}>Trending</Typography>
        <Songimage/>
        <h3>My Playlist</h3>
        <Songstable/>
        <Footer/>
      </div>
   

  )

}

export default HomeClient