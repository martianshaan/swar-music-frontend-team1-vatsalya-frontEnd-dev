import React from 'react'
import  "./SideNavBar.css"
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { LineStyle} from '@material-ui/icons'
import { Link } from "react-router-dom";

function SideNavBar() {
  return (
    <div className="SideBar" >
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <div className="dashboard">
        <h3 className="sidebarTitle">Dashboard </h3>
        <div className='bars'>
          <DensitySmallIcon />
        </div>
        </div>
        <ul className="sidebarList">
        <Link style={{textDecoration: 'none'}} to="/home">
          <li className= "sidebarListItem" >
            <LineStyle className="sideBarIcon"/>
            <p >Home</p>
          </li>
          </Link>

          <Link style={{textDecoration: 'none'}} to="/home/songsList">
          <li className= "sidebarListItem" >
            <LineStyle className="sideBarIcon"/>
            <p >Songs</p>
          </li>
          </Link>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default SideNavBar