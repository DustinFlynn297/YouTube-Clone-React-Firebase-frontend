import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'


function Header() {
    return ( 
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" />
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search"/>
                <SearchIcon className="header__inputButton"/>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                
            </div>
        </div>
     );
}
 
export default Header;