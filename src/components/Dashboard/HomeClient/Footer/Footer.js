import React from 'react'
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import {Typography,IconButton} from '@mui/material';
import './Footer.css';

const Footer =()=> {

   
  return (
    <Box className='music-control'sx={{position :'fixed', bottom :'0',height:'30px', 
    width: `700px`, ml: `40px` ,mb:'100px'}}>
    <div className='footer_body'>
    <div className='footer'>
        <div className='footer_left'>
          <IconButton className='footer_button'> <FavoriteBorderRoundedIcon className="footer__icon"/></IconButton>
          <IconButton className='footer_button'> <AddRoundedIcon className="footer__icon" /></IconButton>
        </div>
        <div className= 'footer_center'>
        <IconButton className='footer_button'><ShuffleRoundedIcon className="footer__grey" /></IconButton> 
        <IconButton className='footer_button'><SkipPreviousRoundedIcon className="footer__icon" /></IconButton>
        <IconButton className='footer_button' fontSize='large' sx={{color:'black'}}> <PauseCircleOutlineRoundedIcon fontSize='large' className="footer__icon"  /> </IconButton>
        <IconButton className='footer_button' sx={{color:'black'}} ><PlayCircleOutlineRoundedIcon fontSize='large' className="footer__icon" /> </IconButton>
        <IconButton className='footer_button'> <SkipNextRoundedIcon className="footer__icon"/></IconButton>
        <IconButton className='footer_button'> <LoopRoundedIcon className="footer__grey"/></IconButton>
      </div>
      <div className= 'footer_right'>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDownRoundedIcon/>
        <Slider aria-label="Volume" size="small" sx={{color:'black'}}/>
        <VolumeUpRoundedIcon/>
       </Stack>
      </div>
    </div>
    <div className='songlength'>
    <Box sx={{ width: 600 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Typography component={'span'} variant='content' color='grey'> 0:45</Typography>
        <Slider aria-label="Volume"  size="small" sx={{color:'black'}}/>
        <Typography component={'span'} variant='content'> 4:45</Typography>
       </Stack>
       </Box>
    </div>
    </div>
    </Box>
  )
}

export default Footer