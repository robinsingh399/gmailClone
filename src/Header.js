import React from 'react';
import './Header.css';
import { Button,IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(logout());
        })
        
    }

    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                <MenuIcon className="header_left_menu_icon"/>
                </IconButton>
                <div className="header_left_icons">
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
                    height="40px"
                    width="109px"/>
                </div>
                
            </div>
            <div className="header_center">
                    <SearchIcon className="search_icon"/>
                    <input type="text" placeholder="Search mail" className="input_icon" />
                    <ArrowDropDownIcon className="arrow_icon"/>
                
            </div>
            <div className="header_right">
                    
                    <HelpOutlineOutlinedIcon/>
                    <SettingsOutlinedIcon/>
                    <AppsIcon/>
                    <Avatar onClick={signOut} src={user?.photoUrl}></Avatar>
                  
            </div>
        </div>
         
    )
}

export default Header;

