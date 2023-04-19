import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import {  Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import { SelectUserStatus, logout } from "../features/userSlice";
import { auth } from "../firebase";

const Header = () => {
    
  const user = useSelector(SelectUserStatus);
 const dispatch = useDispatch();

   const signOut = ()=>{
       auth.signOut().then(()=>{
        dispatch(logout(null))
       })
   }

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
            alt=""
          />
        </div>
      </div>

      <div className="header__middle">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="arrowdown" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton onClick={signOut}>
        <Avatar alt="Remy Sharp" src={user.photoUrl}  />
        </IconButton>        
      </div>
    </div>
  );
};

export default Header;
