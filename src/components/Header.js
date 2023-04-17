import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import {  IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
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
        <IconButton>
        <AccountCircleIcon   />
        </IconButton>        
      </div>
    </div>
  );
};

export default Header;
