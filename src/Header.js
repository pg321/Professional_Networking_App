import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';

function Header() {
  const dispatch= useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    signOut(auth)
  }

  return (
    <div className="header">

    <div className="header__left">
    
        <img
        src="http://lofrev.net/wp-content/photos/2017/04/linkedin_logo.jpg"
        alt=""
        />
        <div className="header__search">
            <SearchIcon />
            <input placeholder="Search" type="text"/>
        </div>
    </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messeging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar="https://www.rd.com/wp-content/uploads/2020/04/GettyImages-492362561-e1586268905784.jpg" title="Me" 
            onClick={()=>auth.signOut()}
          />
      </div>
    </div>
  )
}

export default Header;